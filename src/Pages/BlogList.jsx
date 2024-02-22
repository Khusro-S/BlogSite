import { useLoaderData } from "react-router-dom";

export default function BlogList({ title }) {
  const blogs = useLoaderData();

  return (
    <div className="blogList">
      <h1 className=" my-5 inline-block border-b-2 border-red-400 border-solid">
        {title}
      </h1>

      {blogs.map((blog) => (
        <div
          className="blogPreview py-3 px-4 my-5 mx-0 border-b border-solid border-black border-opacity-10 hover:shadow-[2px_2px_10px_#bebebe] rounded-lg hover:cursor-pointer transition-all ease-linear duration-200"
          key={blog.id}
        >
          <h3 className="text-red-400 mb-2">{blog.title}</h3>
          <p>Written by {blog.author}</p>
          <button
            // onClick={() => handleDelete(blog.id)}
            className="px-2 py-[2px] bg-red-400 text-white font-bold rounded-lg my-2 hover:scale-105 active:scale-90 transition-transform ease-linear"
          >
            Delete blog
          </button>
        </div>
      ))}
    </div>
  );
}

export const blogLoader = async () => {
  const res = await fetch("http://localhost:4000/blogs");

  if (!res.ok) {
    throw Error(
      "Couldn't fetch blog data, check your connection or server and try again"
    );
  }

  return res.json();
};
