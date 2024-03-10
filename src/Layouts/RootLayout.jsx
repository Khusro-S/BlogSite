import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="max-w-6xl my-5 px-5 mx-auto flex flex-col min-h-[95.5vh]">
      <ScrollToTop />
      <header>
        <Navbar />
      </header>

      <main className="my-10 grow">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
