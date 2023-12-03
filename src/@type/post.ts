import { TAuthor } from "@/@type/author";
import { TTag } from "@/@type/tag";

export type TPost = {
  author: TAuthor;
  bookmarks: [];
  createdAt: string;
  description: string;
  id: string;
  slug: string;
  tags: TTag[];
  title: string;
  featuredImage: string;
};
