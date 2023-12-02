import http from "@/libs/http";

export const getMeService = async () => {
  if (!localStorage.getItem("accessToken")) return null;
  const response = await http.get("/users/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};
