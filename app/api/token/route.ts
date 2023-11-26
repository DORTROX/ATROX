import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
const secret = process.env.NEXTAUTH_SECRET

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret });
  return new Response(JSON.stringify(token));
}
