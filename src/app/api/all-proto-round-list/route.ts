import { TAllProtoRoundItem } from "@/app/_types/allProtoRoundList";

export async function GET(request: Request) {
  const requestBody = {
    gmId: "G101",
    _sbmInfo: {
      _sbmInfo: {
        debugMode: "false",
      },
    },
  };

  try {
    const res = await fetch(
      "https://www.betman.co.kr/buyPsblGame/lotterySchedulesInq.do",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*", // 이 헤더는 클라이언트에서 설정할 수 없습니다.
        },
        body: JSON.stringify(requestBody), // fetch에서는 data 대신 body 키워드를 사용합니다.
      }
    );

    if (!res.ok) throw new Error("Response was not OK.");

    const data = await res.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error(error);
    // 에러에 따른 적절한 응답 반환
  }
}
