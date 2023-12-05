import http from "@/libs/http";

export const getAllTagService = async () => {
  const response = await http.get("/tags");
  return response.data;
};
