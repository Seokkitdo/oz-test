import { useState, useEffect } from "react";
import { IProtoMain } from "../_types/CurrentlySellingList";
import { apis } from "../api/protoSportsToto/\bprotoService";

export const useFetchGames = (endpoint: string) => {
  const [data, setData] = useState<IProtoMain | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apis.getContentsDatas(endpoint);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [endpoint]); // endpoint가 변경될 때마다 fetchData 함수가 다시 실행됩니다.

  return data; // 가져온 데이터를 반환합니다.
};
