import http from "@/libs/http";

export const getMeService = async () => {
  const response = await http.get("/users/me");
  return response.data;
};
