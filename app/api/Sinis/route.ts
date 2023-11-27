import { Mongo } from "@/lib/connectMongo";
import { User } from "@/models/User";
import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  const {Name} = await req.json();
  const res = new NextResponse();
  const x = getCookie('next-auth.session-token', { res, req });
  await Mongo();
  const user = await User.findOne({ Name: Name });
  if (user)  {
    user.Token = x; 
    await user.save();
  }
  return Response.json({ data: x });
}
