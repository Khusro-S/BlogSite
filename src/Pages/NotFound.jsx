import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-10">
      <h1>
        Error: <span className="text-red-400">404!</span> Page not found
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem id
        deleniti, amet impedit tempora ipsam eveniet quasi mollitia officia
        provident nostrum ullam doloremque sequi voluptates dicta at nam
        deserunt doloribus?
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
