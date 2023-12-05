import { TPost, TPostCreate } from "@/@type/post";
import http from "@/libs/http";

export const getAllPostService = async () => {
  const response = await http.get("/posts");
  return response.data;
};

export const getPostBySlugService = async (
  slug: string | undefined
): Promise<TPost | undefined> => {
  if (!slug) return;
  const response = await http.get(`/posts/${slug}`);
  return response.data;
};
export const createPostService = async (data: TPostCreate) => {
  const response = await http.post("/posts", data);
  return response.data;
};
