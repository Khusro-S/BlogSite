export default function BlogDetailSkeletonLoading() {
  return (
    <div className="w-full">
      <div className="my-5 bg-red-100 rounded-lg h-full py-3 px-4 relative overflow-hidden">
        <div className="my-5 bg-red-50 w-1/4 h-[1.5rem] rounded-lg" />
        <div className="my-5 bg-red-50 w-full h-[10rem] rounded-lg" />
        <div className="my-5 bg-red-50 w-full h-[15rem] rounded-lg" />
        <div className="my-5 bg-red-50 w-1/4 h-[1.5rem] rounded-lg" />
        <div className="absolute top-0 left-0 w-full h-full animate-shimmer">
          <div className="-skew-x-[45deg] w-1/2 h-full bg-[rgba(255,255,255,0.3)] rounded-lg " />
        </div>
      </div>
    </div>
  );
}
