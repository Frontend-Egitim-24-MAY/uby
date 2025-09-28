import { getCoursesBySlug } from "@/sanity/lib/courseQueries";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ course_slug: string }> }
) {
  const { course_slug } = await params;

  const result = await getCoursesBySlug(course_slug);

  if (result?.error) {
    return NextResponse.json(result, { status: 404 });
  }

  return NextResponse.json(result, { status: 200 });
}