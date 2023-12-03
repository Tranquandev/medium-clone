import { TPost } from "@/@type/post";
import { formattedDate } from "@/helper/formattedDate";
import { getRandomReadTime } from "@/helper/randomReadTime";
import { Link } from "react-router-dom";

type PostProps = {
  post?: TPost;
};

export default function Post({ post }: PostProps) {
  return (
    <div className="p-8 space-y-2 rounded-md shadow-md">
      <div className="flex items-center text-sm gap-x-2">
        <img
          src="https://picsum.photos/200"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <p>{post?.author.username}</p>
        <span>·</span>
        <span className="italic text-gray-400">
          {formattedDate("2023-11-28T14:10:44.393Z")}
        </span>
      </div>

      <h2 className="font-bold">
        <Link to={`posts/${post?.slug}`}>{post?.title}</Link>
      </h2>
      <p className="text-gray-600">
        <Link to={`posts/${post?.slug}`}>{post?.description}</Link>
      </p>
      <div className="flex items-center text-xs gap-x-4">
        {post?.tags.map((tag) => (
          <span className="p-2 bg-gray-300 rounded-2xl" key={tag.id}>
            {tag.name}
          </span>
        ))}
        <span className="text-gray-500">{getRandomReadTime()} min read</span>
      </div>
    </div>
  );
}
