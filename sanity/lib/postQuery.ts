import { groq } from "next-sanity";
import { client } from "./client";
import { Post } from "@/types/sanityTypes";

export const getAllPosts = async (): Promise<{
  error: string | null;
  data: Post[] | null;
}> => {
  const getAllPostQuery = groq`*[_type == "post"]{
            _id,
            title,
            content,
            description,
            publishedAt,
            mainImage{
                asset->{
                url
                },
                alt
            },
            "categories":  categories[]->{
              title,
              description,
            },
        
            "author": author -> {
                _id,
                name,
               description,
            },
        }`;

  try {
    const posts = await client.fetch(getAllPostQuery);

    if (!posts) {
      return { error: "Veri yok", data: null };
    }

    return { error: null, data: posts };
  } catch (error) {
    console.log(error);

    return { error: "Beklenmeyen bir hata oluştu", data: null };
  }
};
