"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PortableText } from "next-sanity";

export default function NewsDetail() {
  const { slug } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/post/${slug}`);
      if (!res.ok) return;
      const json = await res.json();
      setData(json.data?.[0] || json.data || null);
    };
    if (slug) getData();
  }, [slug]);

  if (!data) return <div className="container mx-auto p-8">Yükleniyor...</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      {data.mainImage?.asset?.url && (
        <div className="w-full h-64 relative mb-4">
          <Image
            src={data.mainImage.asset.url}
            alt={data.mainImage.alt || data.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <p className="text-gray-700 mb-6">{data.description}</p>
      <div className="prose max-w-none">
        <PortableText value={data.content} />{" "}
      </div>
    </div>
  );
}
