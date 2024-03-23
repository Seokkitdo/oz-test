import axios from "axios";

export async function GET(request: Request) {
  // console.log("=====api login GET 시작========");
  const { searchParams } = new URL(request.url);
  // console.log(searchParams);
  const type = searchParams.get("type");
  const session = searchParams.get("session");
  // console.log(request);
  const res = await axios(
    `https://www.betman.co.kr/comm/live/rinfo/${type}|${session}`
  );

  // console.log("res");
  // console.log(res);
  // console.log("DUrldurl여역여기!!!");
  // console.log(res.data);
  // console.log("======api login GET 끝========");

  return new Response(JSON.stringify(res.data));
}
