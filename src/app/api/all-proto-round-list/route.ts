import { TAllProtoRoundItem } from "@/app/_types/allProtoRoundList";
import axios from "axios";

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
    const res = await axios(
      "https://www.betman.co.kr/buyPsblGame/lotterySchedulesInq.do",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: requestBody,
      }
    );
    return new Response(JSON.stringify(res.data));
  } catch (error) {
    console.error(error);
    // 에러에 따른 적절한 응답 반환
  }
}
