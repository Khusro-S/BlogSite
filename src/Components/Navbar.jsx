import classNames from "classnames";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return classNames({
      "font-bold underline text-red-400": isActive,
    });
  };
  return (
    <nav className="flex justify-between items-center border-b-2 border-red-400 border-solid pb-3">
      <h1 className="text-red-400 ">BlogSite</h1>
      <div className="flex gap-5">
        <NavLink className={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink className={navLinkStyles} to="new-blog">
          New Blog
        </NavLink>
      </div>
    </nav>
  );
}
