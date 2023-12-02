import InputForm from "@/components/Form/InputForm";
import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "@/hooks/useAuth";
import { TLogin } from "@/@type/auth";

const schema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const { mutate: loginMutation, isLoading } = useLogin();
  const onSubmit = (data: TLogin) => {
    loginMutation(data);
  };

  return (
    <div className="w-full px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 rounded-md shadow-md border-1 max-w-[500px] w-[500px] mx-auto mt-40"
      >
        <h2 className="mb-8 text-2xl font-medium text-center">Đăng Nhập</h2>
        <div className="space-y-5">
          <InputForm
            type="email"
            label="Email"
            name="email"
            control={control}
            errorMessage={errors.email?.message}
          />
          <InputForm
            type="password"
            label="Password"
            name="password"
            control={control}
            errorMessage={errors.password?.message}
          />
          <Button
            color="primary"
            className="w-full bg-green-500"
            size="lg"
            type="submit"
            isLoading={isLoading}
          >
            Đăng nhập
          </Button>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              Chưa có tài khoản?
              <Link to="/register" className="ml-2 text-green-500">
                Nhấn vào đây để đăng ký
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
