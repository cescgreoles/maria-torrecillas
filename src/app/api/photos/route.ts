import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");
  const project = searchParams.get("project");

  if (!year || !project) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  const imageDir = path.join(process.cwd(), "public", "image", year, project);
  const files = await fs.readdir(imageDir);
  const photos = files.filter((name) => name.endsWith(".webp"));
  return NextResponse.json(photos);
}
