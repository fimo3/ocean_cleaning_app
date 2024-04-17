import Donation from "@/app/(models)/Donation";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("POST RAN");
  try {
    const body = await req.json();
    const donationData = body.formData;
    await Donation.create(donationData);
    return NextResponse.json({ message: "Donation Created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const donations = await Donation.find();
    return NextResponse.json({ donations }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
