import { useState, useEffect } from "react";
import { apis } from "../api/protoSportsToto/route";
import { IProtoMain } from "../_types/CurrentlySellingList";

export const useFetchGames = (endpoint: string) => {
  const [data, setData] = useState<IProtoMain | null>(null);

  useEffect(() => {
    const url = "comm/live/rinfo/";
    apis
      .getContentsDatas(`${url}${endpoint}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [endpoint]);

  return data;
};
