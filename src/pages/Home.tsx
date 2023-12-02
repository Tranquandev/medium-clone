import Post from "@/components/Post/Post";
import { useGetAllPost } from "@/hooks/usePost";

export default function Home() {
  const { data } = useGetAllPost();
  return (
    <div className="container ">
      <div className="mt-10 space-y-10">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
