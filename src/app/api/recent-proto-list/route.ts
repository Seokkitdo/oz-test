import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const session = searchParams.get("session");
  const res = await axios(
    `https://www.betman.co.kr/comm/live/rinfo/${type}|${session}`
  );

  return new Response(JSON.stringify(res.data));
}
