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

  const res = await axios(
    "https://www.betman.co.kr/buyPsblGame/lotterySchedulesInq.do",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: requestBody,
    }
  );

  return new Response(JSON.stringify(res.data));
}
