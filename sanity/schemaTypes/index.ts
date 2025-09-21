import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import { authorType } from "./authorType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { blockContentType } from "./blockContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, authorType, categoryType, postType, blockContentType],
};
