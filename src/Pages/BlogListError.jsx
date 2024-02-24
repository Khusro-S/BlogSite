import { Link, useRouteError } from "react-router-dom";

export default function BlogListError() {
  const error = useRouteError();
  return (
    <div className="my-5 flex flex-col gap-5">
      <h1 className="text-red-400">Error!</h1>
      <p>
        {error.message === "Load failed"
          ? "Couldn't load your data, try refreshing or contacting us"
          : error.message}
      </p>

      <p>
        Go{" "}
        <Link
          to="/"
          className="hover:text-red-400 border-b-2 border-red-400 border-solid"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
