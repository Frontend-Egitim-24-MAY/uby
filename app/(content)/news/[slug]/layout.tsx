import { getPostBySlug } from "@/sanity/lib/postQuery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(`http://localhost:3000/api/post/${slug}`);
  const data = await res.json();

  return {
    title: data.data.seo.metatitle || "Başluk",
    description: data.data.seo.metadescription || "Açuklama",
    keywords: data.data.seo.keywords ? data.data.seo.keywords.join(", ") : "",
    openGraph: {
      title: data.data.seo.metatitle || "Başluk",
      description: data.data.seo.metadescription || "Açuklama",
    },
    twitter: {
      title: data.data.seo.metatitle || "Başluk",
      description: data.data.seo.metadescription || "Açuklama",
    },
    other: {
      keywords: data.data.seo.keywords ? data.data.seo.keywords.join(", ") : "",
    },
  };
}

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
