// app/api/fetch-video/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ttdl } from "btch-downloader";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing TikTok URL" }, { status: 400 });
  }

  try {
    const data = await ttdl(url.trim());
    return NextResponse.json({
      status: data?.status === false ? false : true,
      video: data?.video || null,
      audio: data?.audio || null,
      thumbnail: data?.thumbnail || null,
    });
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch video" },
      { status: 500 }
    );
  }
}
