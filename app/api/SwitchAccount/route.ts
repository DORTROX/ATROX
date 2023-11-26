import { NextRequest } from "next/server";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  setCookie("next-auth.session-token", token, {cookies, domain: '.vercel.app', secure: true, httpOnly: true, sameSite: 'none'});
  return new Response(JSON.stringify("OK"));
}
// next-auth.session-token __Secure-next-auth.session-token