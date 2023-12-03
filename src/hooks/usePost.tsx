import {
  getAllPostService,
  getPostBySlugService,
} from "@/services/postServices";
import { useQuery } from "react-query";

export const useGetAllPost = () => {
  return useQuery(["GET_ALL_POST"], getAllPostService, {
    onSuccess: () => {},
    onError: () => {},
  });
};

export const useGetPostBySlug = (slug: string | undefined) => {
  return useQuery(
    ["GET_POST_BY_SLUG", slug],
    () => getPostBySlugService(slug),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
