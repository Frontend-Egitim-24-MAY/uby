import { NextResponse } from "next/server";
import { getPostBySlug } from "@/sanity/lib/postQuery";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) return NextResponse.json({ error: "slug gerekli" }, { status: 400 });

  const result = await getPostBySlug(slug);
  if (result.error) return NextResponse.json(result, { status: 404 });

  return NextResponse.json(result, { status: 200 });
}
