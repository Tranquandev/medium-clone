import InputForm from "@/components/Form/InputForm";
import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRegister } from "@/hooks/useAuth";
const schema = z
  .object({
    username: z.string().min(5, "Tên đăng nhập phải có ít nhất 6 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Nhập lại mật khẩu không đúng!",
    path: ["confirmPassword"],
  });
export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });
  const { mutate: registerMutation, isLoading } = useRegister();

  const onSubmit = (data) => {
    registerMutation(data);
  };
  return (
    <div className="px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 rounded-md shadow-md border-1 max-w-[500px] w-[500px] mx-auto mt-40"
      >
        <h2 className="mb-8 text-2xl font-medium text-center">Đăng Ký</h2>
        <div className="space-y-5">
          <InputForm
            type="text"
            label="Username"
            control={control}
            name="username"
            errorMessage={errors.username?.message}
          />

          <InputForm
            type="email"
            label="Email"
            name="email"
            control={control}
            errorMessage={errors.email?.message}
          />
          <InputForm
            type="password"
            label="Mật khẩu"
            name="password"
            control={control}
            errorMessage={errors.password?.message}
          />
          <InputForm
            type="password"
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            control={control}
            errorMessage={errors.confirmPassword?.message}
          />
          <Button
            color="primary"
            className="w-full bg-green-500"
            size="lg"
            type="submit"
            isLoading={isLoading}
          >
            Đăng ký
          </Button>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              Đã có tài khoản?
              <Link to="/login" className="ml-2 text-green-500">
                Nhấn vào đây để đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
