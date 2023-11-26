import { NextRequest, NextResponse } from "next/server";
import { getCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  setCookie("next-auth.session-token", token, {cookies});
  return new Response(JSON.stringify("OK"));
}
