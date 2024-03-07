import { Suspense } from "react";
import {
  Await,
  Form,
  defer,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import BlogDetailError from "./BlogDetailError";
import BlogDetailSkeletonLoading from "../Components/BlogDetailSkeletonLoading";

export default function BlogDetail() {
  const blog = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // console.log("handle delete id: " + id);
    fetch("/public/db.json/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <p className="my-10">
        Go{" "}
        <button
          className="hover:text-red-400 border-b-2 border-red-400 border-solid"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </p>

      <Suspense fallback={<BlogDetailSkeletonLoading />}>
        <Await resolve={blog.blogData} errorElement={<BlogDetailError />}>
          {(blogData) => (
            <div className="flex flex-col gap-10">
              <h1 className="text-red-400">{blogData.title}</h1>
              {/* <p>{blogData.body}</p> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: blogData.body.replace(/\n/g, "<br>"),
                }}
              />
              <p>
                Author:{" "}
                <span className="border-b border-red-400 border-solid font-semibold">
                  {blogData.author}
                </span>
                <br />
                At:{" "}
                <span className="border-b border-red-400 border-solid font-semibold">
                  {blogData.time}
                  {/* {console.log(blogData.time)} */}
                </span>
              </p>

              {/* {console.log("normal id: " + blogData.id)} */}
              <Form
                method="delete"
                onSubmit={() => handleDelete(blogData.id)}
                // action={"/blogs/" + blogData.id}
              >
                <button
                  type="submit"
                  className="bg-red-400 border-none p-2 place-self-start rounded-lg cursor-pointer text-white font-semibold hover:scale-105 active:scale-100 transition-transform ease-linear"
                >
                  Delete Blog
                </button>
              </Form>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export const blogDetailLoader = async ({ params }) => {
  const getData = async () => {
    const { id } = params;
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch("/public/db.json/" + id);

    if (!res.ok) {
      throw Error("Couldnt fetch blog");
    }

    return res.json();
  };
  return defer({ blogData: getData() });
};