import { PortableTextBlock } from "next-sanity";

type Author = {
  _id: string;
  name: string;
  description: string;
};

type Category = {
  id : number;
  slug: string;
  title: string;
  description: string;
};

type Image = 
{
  alt: string;
  asset: {url: string};
}

export type Post = {
  _id: string;
  author: Author;
  slug: string;
  mainImage: Image;
  categories: Category;
  publishedAt: string;
  title: string;
  body: PortableTextBlock;
  description: string;
};
