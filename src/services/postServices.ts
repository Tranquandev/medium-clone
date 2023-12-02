import http from "@/libs/http";

export const getAllPostService = async () => {
  const response = await http.get("/posts");
  return response.data;
};
