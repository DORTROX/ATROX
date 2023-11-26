import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  return new Response(JSON.stringify(token));
}
