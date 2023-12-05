import { getMeService } from "@/services/userServices";
import { useQuery } from "react-query";

export function useUser() {
  console.log("get me");

  return useQuery(["GET_ME"], getMeService, {
    // enabled: !!localStorage.getItem("accessToken"),
    onError: () => {
      localStorage.removeItem("accessToken");
    },
  });
}
