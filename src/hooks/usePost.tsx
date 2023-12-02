import { getAllPostService } from "@/services/postServices";
import { useQuery } from "react-query";

export const useGetAllPost = () => {
  return useQuery(["GET_ALL_POST"], getAllPostService, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
