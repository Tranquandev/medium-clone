import { getMeService } from "@/services/userServices";
import { useQuery } from "react-query";

export function useUser() {
  return useQuery(["GET_ME"], getMeService, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: () => {
      localStorage.removeItem("accessToken");
    },
  });
}
