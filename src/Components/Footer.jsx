import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-3 border-t-2 border-red-400 border-solid pt-5">
      <h3 className="text-red-400">BlogSite</h3>

      <div className="links flex gap-10 items-center justify-center">
        <Link
          to="https://github.com/Khusro-S"
          target="_blank"
          className="hover:scale-110 transition-transform ease-linear 1.5s"
        >
          <img src="/src/assets/github.png" alt="Github logo" />
        </Link>

        <Link
          to="https://www.linkedin.com/in/khusro-sakhi/"
          target="_blank"
          className="hover:scale-110 transition-transform ease-linear 1.5s"
        >
          <img src="/src/assets/linkedin.png" alt="Linkedin logo" />
        </Link>
      </div>
    </footer>
  );
}
