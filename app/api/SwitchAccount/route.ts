import { NextRequest, NextResponse } from "next/server";
// import { setCookie } from "cookies-next";
// import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  // setCookie("next-auth.session-token", token, {cookies});
  const response = NextResponse.json("OK",
    { status: 200, statusText: "Set cookie successfully" }
  );
  response.cookies.set({
    name: "__Secure-next-auth.session-token",
    value: token
  })
  return response
}
// next-auth.session-token __Secure-next-auth.session-token