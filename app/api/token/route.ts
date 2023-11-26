import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
const secret = process.env.NEXTAUTH_SECRET

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret,cookieName:"__Secure-next-auth.session-token" });
  if (token) {
    return new Response(JSON.stringify(token));
  }
  // return new Response(JSON.stringify(token));
  // Return a 401 status and JSON as the body
  return new Response(JSON.stringify({ error: "Not Authorized" }), {
    status: 401,
  });
}
