"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import GameTable from "./_components/GameTable";

type RoundData = {
  gmId: string;
  gmOsidTs: number;
  gmOsidTsPlayNo: number;
  gmOsidTsYear: number;
  gmTs: number;
  saleEndDate: number;
  saleStartDate: number;
  saleStatus: number;
};

export default function Home() {
  const [selectedRound, setSelectedRound] = useState<string | undefined>(
    undefined
  );
  const [startedGames, setStartedGames] = useState<any[][] | undefined>(
    undefined
  );
  const [notStartedGames, setNotStartedGames] = useState<any[][] | undefined>(
    undefined
  );

  console.log({ notStartedGames });

  const {
    data: roundData,
    isError: isAllProtoRoundError,
    isSuccess,
  } = useQuery({
    queryKey: ["all-proto-round-list"],
    queryFn: () => axios.get("api/all-proto-round-list"),
    refetchInterval: 300000,
  });
  const { data: gameData, isError: isRecentProtoListError } = useQuery({
    queryKey: ["recent-proto-list", selectedRound],
    queryFn: () =>
      axios.get(`api/recent-proto-list?type=G101&session=${selectedRound}`),
    refetchInterval: 300000,
    enabled: !!selectedRound,
  });

  useEffect(() => {
    if (gameData && !isRecentProtoListError) {
      // 예시로 첫번째 liveInfo의 compSchedules의 datas를 사용합니다.
      const firstLiveInfoGamesData =
        gameData.data.liveInfo[0].compSchedules.datas;
      const { startedGames: started, notStartedGames: notStarted } =
        classifyGames(firstLiveInfoGamesData);

      // 상태 업데이트
      setStartedGames(started);
      setNotStartedGames(notStarted);
    }
  }, [gameData, isRecentProtoListError]);

  useEffect(() => {
    if (isSuccess) {
      if (!selectedRound) {
        setSelectedRound(roundData.data.lotterySchedulesList[0].gmTs);
      }
    }
  }, [isSuccess, selectedRound]);

  const classifyGames = (
    gamesData: any[][]
  ): { startedGames: any[][]; notStartedGames: any[][] } => {
    const now = new Date().getTime();
    const tenMinutesLater = now + 600000; // 현재 시간에서 10분(600,000ms)을 더함

    const startedGames = gamesData.filter(
      (game) => new Date(game[3]).getTime() < tenMinutesLater
    );
    const notStartedGames = gamesData.filter(
      (game) => new Date(game[3]).getTime() >= tenMinutesLater
    );

    return { startedGames, notStartedGames };
  };

  const handleRoundChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRound(event.target.value);
  };

  if (gameData && !isRecentProtoListError) {
    // 예시로 첫번째 liveInfo의 compSchedules의 datas를 사용합니다.
    // 실제 사용 시에는 gameData 구조에 따라 접근 방식을 조정해야 합니다.
    const firstLiveInfoGamesData =
      gameData.data.liveInfo[0].compSchedules.datas;
    const { startedGames, notStartedGames } = classifyGames(
      firstLiveInfoGamesData
    );
  }

  console.log(roundData);

  return (
    <>


      <main className="flex flex-col justify-center items-center bg-gray-100">

        <div className="w-80">
          <div className="relative inline-block text-left">
            <div>
              <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>


            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
              <div className="py-1" role="none">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                </form>
              </div>
            </div>
          </div>
        </div>


        {roundData && (
          <select
            className="p-2"
            value={selectedRound}
            onChange={handleRoundChange}
          >
            {roundData.data.lotterySchedulesList.map(
              (round: any, index: number) => (
                <option key={index} value={round.gmTs}>
                  회차 {index + 1}: {round.gmTs}
                </option>
              )
            )}
          </select>
        )}

        {/* {gameData && notStartedGames && (
          <GameTable
            data={gameData.data}
            notStartedGames={notStartedGames}
            startedGames={startedGames}
          />
        )} */}
      </main>
    </>
  );
}
