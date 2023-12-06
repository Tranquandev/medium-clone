import { TPost } from "@/@type/post";
import Post from "@/components/Post/Post";
import HomeSkeleton from "@/components/Skeleton/HomeSkeleton";
import { useGetAllPost } from "@/hooks/usePost";

export default function Home() {
  const { data, isLoading } = useGetAllPost();
  console.log(data);

  if (isLoading)
    return (
      <div className="container">
        <HomeSkeleton />
      </div>
    );
  return (
    <div className="container ">
      <div className="mt-10 space-y-10">
        {data?.posts &&
          data.posts.length > 0 &&
          data.posts.map((post: TPost) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}
