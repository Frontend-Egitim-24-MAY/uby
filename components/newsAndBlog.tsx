"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Post } from "@/types/sanityTypes";

export default function NewsAndBlog() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/post");
      const json = await res.json();
      setData(json.data || []);
    };

    getData();
  }, []);

  const news = data.slice(0, 3);
  const blogs = data.slice(3, 6);

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="flex gap-8">
        <div className="flex-1">
          <h2 className="text-2xl  mb-4 border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer text-primary font-bold">
            Blog
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {news.map((post) => {
              const slug =
                typeof post.slug === "string"
                  ? post.slug
                  : (post.slug as any)?.current;
              return (
                <Link
                  key={post._id}
                  href={`/news/${slug}`}
                  className="block bg-white rounded shadow overflow-hidden border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer"
                >
                  <div className="w-full h-40 relative ">
                    {post.mainImage?.asset?.url && (
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-80">
          <h2 className="text-2xl text-primary font-bold mb-4 border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer">
            News
          </h2>
          <div className="flex flex-col gap-4">
            {blogs.map((post) => {
              const slug =
                typeof post.slug === "string"
                  ? post.slug
                  : (post.slug as any)?.current;
              return (
                <Link
                  key={post._id}
                  href={`/news/${slug}`}
                  className="flex gap-3 items-start bg-white rounded shadow p-3 overflow-hidden border-primary/40 border-b-2 hover:border-primary duration-200 cursor-pointer"
                >
                  <div className="w-20 h-20 relative flex-shrink-0">
                    {post.mainImage?.asset?.url && (
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover rounded"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{post.title}</h4>
                    <p className="text-sm text-gray-600">{post.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
