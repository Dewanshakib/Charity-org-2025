import connectDb from "@/helper/MongoConfig";
import { members } from "@/models/MemberSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    name,
    fatherName,
    motherName,
    birthDate,
    number,
    className,
    studying,
  } = await req.json();
  await connectDb();
  await members.create({
    name,
    fatherName,
    motherName,
    birthDate,
    number,
    className,
    studying,
  });
  return NextResponse.json(
    {
      message: "Member Registerd Successfully",
    },
    {
      status: 201,
    }
  );
}

export async function GET() {
  await connectDb();
  const allMembers = await members.find();
  if (allMembers) {
    return NextResponse.json({ message: "No members found" }, { status: 400 });
  }
  return NextResponse.json(allMembers, { status: 200 });
}
