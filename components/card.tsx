import { Post } from "@/types/sanityTypes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Card = ({ post }: { post: Post }) => {
  console.log("post: ", post);
  return (
    <Link href={`/kurslar/${post.categories[0].slug.current}/${post.slug.current}`} className="h-auto">
      <div className="w-full">
        <Image
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt}
          width={400}
          height={0}
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl">{post.title}</h1>
        <p>{post.description}</p>
      </div>
    </Link>
  );
};
