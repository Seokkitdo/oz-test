interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: Request) {
  console.log("=====api login POST 시작========");
  const body: RequestBody = await request.json();

  const user = {
    id: "user아이디",
    password: "awf23f23f",
    token: "accesstoken",
    refreshToken: "refresh",
  };
  console.log("======api login POST 끝========");

  return new Response(JSON.stringify(user));
}
