import { TPostCreate } from "@/@type/post";
import {
  createPostService,
  getAllPostService,
  getPostBySlugService,
} from "@/services/postServices";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

export const useGetAllPost = () => {
  return useQuery(["GET_ALL_POST"], getAllPostService, {
    onSuccess: (data) => {
      console.log("new posts ", data);
    },
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
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation((data: TPostCreate) => createPostService(data), {
    onSuccess: (data) => {
      console.log("create post", data);
      queryClient.invalidateQueries("GET_ALL_POST");
    },
    onError: () => {},
  });
};
