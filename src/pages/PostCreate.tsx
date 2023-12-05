import { TTag } from "@/@type/tag";
import { useCreatePost } from "@/hooks/usePost";
import { useGetAllTags } from "@/hooks/useTag";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import { z } from "zod";
const schema = z.object({
  title: z.string().min(2, "Tiêu đề phải có ít nhất 5 ký tự"),
  description: z.string().min(2, "Mô tả phải có ít nhất 5 ký tự"),
  text: z.string().min(2, "Nội dung phải có ít nhất 5 ký tự"),
});

export default function PostCreate() {
  const navigate = useNavigate();
  const [tags, setTags] = useState<{ value: string; label: string }[]>([]);
  const { data: tagList } = useGetAllTags();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      text: "",
    },
    resolver: zodResolver(schema),
  });
  const { mutate: createPostMutation, isLoading } = useCreatePost();
  const onSubmit = (data) => {
    createPostMutation(
      {
        ...data,
        tagIds: tags.map((tag) => tag.value),
      },
      {
        onSuccess: () => {
          toast.success("Tạo bài viết thành công!");
          navigate("/");
        },
      }
    );
  };

  const handleSelect = (data) => {
    setTags(data);
  };
  return (
    <div className="container">
      <h1 className="my-10 text-2xl font-bold text-center">Tạo mới bài viết</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-[600px]">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tiêu đề</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md outline-none ${
                    errors.title?.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tiêu đề bài đăng"
                  {...register("title")}
                />
                <span className="text-xs text-red-500">
                  {errors.title?.message}
                </span>
                {/* <InputForm
                  name="title"
                  control={control}
                  label="Tiêu đề"
                  errorMessage={errors.title?.message}
                /> */}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Mô tả</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md outline-none  ${
                    errors.description?.message ? "border-red-500" : ""
                  }`}
                  placeholder="Mô tả bài đăng"
                  {...register("description")}
                />
                <span className="text-xs text-red-500">
                  {errors.description?.message}
                </span>
                {/* <InputForm
                  name="description"
                  control={control}
                  label="Mô tả"
                  errorMessage={errors.description?.message}
                /> */}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nội dung</label>
                <textarea
                  className={`w-full px-4 py-2 border border-gray-300 rounded-md outline-none  ${
                    errors.title?.message ? "border-red-500" : ""
                  }`}
                  rows={10}
                  {...register("text")}
                ></textarea>
                <span className="text-xs text-red-500">
                  {errors.text?.message}
                </span>
                {/* <InputForm
                  name="text"
                  control={control}
                  label="Nội dung"
                  errorMessage={errors.text?.message}
                /> */}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tags</label>
                <Select
                  isMulti
                  options={
                    tagList &&
                    tagList.length > 0 &&
                    tagList.map((tag) => ({
                      value: tag.id,
                      label: tag.name,
                    }))
                  }
                  onChange={handleSelect}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md"
                type="submit"
              >
                Tạo bài viết
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
