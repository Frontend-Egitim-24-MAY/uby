import { groq } from "next-sanity";
import { client } from "./client";
import { Post } from "@/types/sanityTypes";

export const getCoursesBySlug = async (slug : string): Promise <{error: string | null; data : Post[] | null}> =>
{
    const content = groq`*[_type == "post" && $slug in categories[]->slug.current]{
        _id,
        title,
        slug,
        description,
        publishedAt,
        mainImage {
          asset->{
            url
          },
          alt
        },
        content,
        "categories": categories[]->{
          title,
          description,
          slug
        },
        "author": author->{
          _id,
          name,
          description
        }
      }`;

try {
    const posts = await client.fetch(content, {slug});

    if (!posts) {
      return { error: "Veri yok", data: null };
    }

    return { error: null, data: posts };
  } catch (error) {
    console.log(error);

    return { error: "Beklenmeyen bir hata oluştu", data: null };
  }
}