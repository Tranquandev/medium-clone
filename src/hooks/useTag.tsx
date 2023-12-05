import { getAllTagService } from "@/services/tagServices";
import { useQuery } from "react-query";

export const useGetAllTags = () => {
  return useQuery(["GET_ALL_TAG"], getAllTagService, {
    onSuccess: () => {},
    onError: () => {},
  });
};
