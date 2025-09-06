import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

export async function GET(req: NextRequest) {
  const filePath = path.resolve(process.cwd(), "Resume", "Mohammed - ResumeBA.pdf");

  try {
    const fileBuffer = fs.readFileSync(filePath);
    const headers = new Headers();
    headers.append("Content-Type", "application/pdf");
    headers.append("Content-Disposition", "attachment; filename=\"Mohammed-ResumeBA.pdf\"");

    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    console.error("Error downloading resume:", error);
    return NextResponse.json({ message: "Resume not found" }, { status: 404 });
  }
}
