import { formattedDate } from "@/helper/formattedDate";
import { getRandomReadTime } from "@/helper/randomReadTime";
import { useGetPostBySlug } from "@/hooks/usePost";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
export default function PostDetail() {
  const { slug } = useParams();
  const { data } = useGetPostBySlug(slug);
  console.log("data slug", data);

  return (
    <div className="max-w-[700px] mx-auto px-4 space-y-10 ">
      <h1 className="text-[42px] font-bold mt-10 ">{data?.title}</h1>
      <div className="flex items-center text-sm gap-x-2">
        <img
          src="https://picsum.photos/200"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="">
          <p>{data?.author.username}</p>
          <span>{`${getRandomReadTime()} min read`}</span>
          <span className="mx-2">·</span>
          <span className="italic text-gray-400">
            {formattedDate("2023-11-28T14:10:44.393Z")}
          </span>
        </div>
      </div>
      <img
        src={`${data?.featuredImage || "https://picsum.photos/700/400"}`}
        alt=""
        className="w-full h-[400px] object-cover rounded-md"
      />

      <div className="prose max-w-none">
        {data?.html ? parse(data?.html) : data?.text}
      </div>
    </div>
  );
}
