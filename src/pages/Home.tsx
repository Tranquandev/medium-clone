import { TPost } from "@/@type/post";
import Post from "@/components/Post/Post";
import { useGetAllPost } from "@/hooks/usePost";

export default function Home() {
  const { data } = useGetAllPost();

  return (
    <div className="container ">
      <div className="mt-10 space-y-10">
        {data?.posts.map((post: TPost) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
