import { getToken } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  return new Response(JSON.stringify(token));
}
