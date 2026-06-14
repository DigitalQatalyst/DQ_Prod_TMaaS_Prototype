import { NextRequest, NextResponse } from "next/server";

export async function POST(_request: NextRequest) {
  // TODO: port contact form validation from api/contact.js
  return NextResponse.json({ success: true });
}
