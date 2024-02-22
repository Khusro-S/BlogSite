import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function RootLayout() {
  return (
    <div className="max-w-6xl my-5 mx-auto px-5">
      <header>
        <Navbar />
      </header>

      <main className="my-10">
        <Outlet />
      </main>
    </div>
  );
}
