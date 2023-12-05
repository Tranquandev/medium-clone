const PostSkeleton = () => {
  return (
    <div className="p-8 space-y-2 rounded-md shadow-md">
      <div className="flex items-center text-sm gap-x-2">
        <div className="w-10 h-10 rounded-full is-loading" />
        <div className="w-20 h-4 is-loading"></div>
        <span>·</span>
        <span className="italic text-gray-400">
          <div className="w-20 h-4 is-loading"></div>
        </span>
      </div>

      <h2 className="w-full h-4 is-loading"></h2>
      <p className="w-full h-20 is-loading"></p>
      <div className="flex items-center text-xs gap-x-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span className="w-10 h-5 is-loading" key={index}></span>
          ))}
      </div>
    </div>
  );
};

export default function HomeSkeleton() {
  return (
    <div className="mt-10 space-y-10">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <PostSkeleton key={index} />
        ))}
    </div>
  );
}
