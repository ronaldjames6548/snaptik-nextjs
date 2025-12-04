import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const fileUrl = req.nextUrl.searchParams.get("videoUrl"); // dùng chung cho audio
  const filename = req.nextUrl.searchParams.get("filename") || "download";

  if (!fileUrl) {
    return NextResponse.json({ error: "Missing file URL" }, { status: 400 });
  }

  try {
    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error("Failed to fetch file");

    const buffer = await response.arrayBuffer();
    const contentType =
      response.headers.get("Content-Type") ?? "application/octet-stream";

    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("Download error:", err);
    return NextResponse.json({ error: "Download failed" }, { status: 500 });
  }
}
