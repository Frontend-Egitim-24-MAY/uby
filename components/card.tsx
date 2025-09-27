import { Post } from "@/types/sanityTypes";
import Image from "next/image";

export const Card = ({ post }: { post: Post }) => {
  return (
    <div className="h-auto">
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
    </div>
  );
};
