import { TLogin, TRegister } from "@/@type/auth";
import http from "@/libs/http";

export const registerService = async (data: TRegister) => {
  const response = await http.post("/users/signup", data);
  return response.data;
};
export const loginService = async (data: TLogin) => {
  const response = await http.post("/users/login", data);
  return response.data;
};

export const logoutService = async () => {
  const response = await http.post("/users/logout");
  return response.data;
};
