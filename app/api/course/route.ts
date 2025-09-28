import { getCoursesBySlug } from "@/sanity/lib/courseQueries";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    if (!slug) {
        return NextResponse.json({ error: "Slug parametresi gerekli" }, { status: 400 });
      }
    const result = await getCoursesBySlug(slug);
  if (result?.error) {
    return NextResponse.json(result, { status: 404 });
  }

  return NextResponse.json(result, { status: 200 });
}
