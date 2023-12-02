import { TLogin, TRegister } from "@/@type/auth";
import { loginService, registerService } from "@/services/authServices";
import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation((data: TRegister) => registerService(data), {
    onSuccess: () => {
      toast.success("Đăng ký thành công!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data.message);
    },
  });
};
export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation((data: TLogin) => loginService(data), {
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token);
      queryClient.invalidateQueries("GET_ME");
      navigate("/");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data.message);
    },
  });
};

export function useLogout() {
  const queryClient = useQueryClient();
  const onSignOut = useCallback(() => {
    queryClient.setQueryData(["GET_ME"], null);
    localStorage.removeItem("accessToken");
  }, [queryClient]);
  return onSignOut;
}
