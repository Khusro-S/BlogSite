import { Suspense } from "react";
import { useLoaderData, defer, Await, Link } from "react-router-dom";
import HomeSkeletonLoading from "../Components/HomeSkeletonLoading";

export default function BlogList({ title }) {
  const blogs = useLoaderData();

  return (
    <div className="blogList">
      <h1 className="my-5 inline-block border-b-2 border-red-400 border-solid">
        {title}
      </h1>
      <Suspense fallback={<HomeSkeletonLoading />}>
        <Await resolve={blogs.data} errorElement={<p>Error loading Blogs</p>}>
          {(data) =>
            data.map((data) => (
              <div
                className="blogPreview block py-3 px-4 my-5 mx-0 border-b border-solid border-black border-opacity-10 hover:shadow-[2px_2px_10px_#bebebe] rounded-lg transition-all ease-linear duration-200"
                key={data.id}
              >
                <Link to={`/blogs/${data.id}`} className="flex flex-col gap-5">
                  <h3 className="text-red-400 mb-2">{data.title}</h3>
                  <p className="line-clamp-2">{data.body}</p>
                  <p>Written by {data.author}</p>
                </Link>
              </div>
            ))
          }
        </Await>
      </Suspense>
    </div>
  );
}

// const awaitTimeout = (delay) =>
//   new Promise((resolve) => setTimeout(resolve, delay));

export const blogLoader = async () => {
  const getData = async () => {
    // await awaitTimeout(1000);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch("http://localhost:4000/blogs");

    if (!res.ok) {
      throw Error(
        "Couldn't fetch blog data, check your connection or server and try again"
      );
    }
    return res.json();
  };
  return defer({ data: getData() });
};
