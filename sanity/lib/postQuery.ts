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
            slug,
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
              slug,
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

export const getPostBySlug = async (slug: string): Promise<{
  error: string | null;
  data: Post[] | null;
}> => {
  const query = groq`*[_type == "post" && slug.current == $slug]{
        _id,
        title,
        slug,
        description,
        publishedAt,
        mainImage{
          asset->{url},
          alt
        },
        content,
        "categories": categories[]->{title, description, slug},
        "author": author->{_id, name, description}
    }`;

  try {
    const posts = await client.fetch(query, { slug });
    if (!posts) return { error: "Veri yok", data: null };
    return { error: null, data: posts };
  } catch (error) {
    console.log(error);
    return { error: "Beklenmeyen bir hata olustu", data: null };
  }
};


