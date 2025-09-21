import { Post } from "@/types/sanityTypes";
import Image from "next/image";

export const Card = ({ post }: { post: Post }) => {
  return (
    <div>
      <div>
        <Image src={post.mainImage.asset.url} alt={post.mainImage.alt}  width={100} height={100}/>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
