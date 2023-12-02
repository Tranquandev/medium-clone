import { getMeService } from "@/services/userServices";
import { useQuery } from "react-query";

export function useUser() {
  return useQuery(["GET_ME"], getMeService, {
    onError: () => {
      localStorage.removeItem("accessToken");
    },
  });
}
