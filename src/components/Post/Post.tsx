import { TPost } from "@/@type/post";
import { formattedDate } from "@/helper/formattedDate";
import { getRandomReadTime } from "@/helper/randomReadTime";

type PostProps = {
  post?: TPost;
};

export default function Post(props: PostProps) {
  return (
    <div className="p-8 space-y-2 rounded-md shadow-md">
      <div className="flex items-center text-sm gap-x-2">
        <img
          src="https://picsum.photos/200"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <p>Nguyễn Văn A</p>
        <span>·</span>
        <span className="italic text-gray-400">
          {formattedDate("2023-11-28T14:10:44.393Z")}
        </span>
      </div>

      <h2 className="font-bold">Why Japanese Websites Look So Different</h2>
      <p className="text-gray-600">
        & how to analyze design choices without jumping to conclusions Over the
        years, I have had many encounters with Japanese websites — be it
        researching visa requirements, planning trips, or simply
      </p>
      <div className="flex items-center text-xs gap-x-4">
        <span className="p-2 bg-gray-300 rounded-2xl">Web Design</span>
        <span className="text-gray-500">{getRandomReadTime()} min read</span>
      </div>
    </div>
  );
}
