import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Laouts
import RootLayout from "./Layouts/RootLayout";

// loaders
import BlogList, { blogLoader } from "./Pages/BlogList";

// Pages
import NewBlog from "./Pages/NewBlog";
import NotFound from "./Pages/NotFound";
import BlogListError from "./Pages/BlogListError";
import BlogDetail, { blogDetailLoader } from "./Pages/BlogDetail";
import BlogDetailError from "./Pages/BlogDetailError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<BlogList title="All Blogs" />}
        loader={blogLoader}
        errorElement={<BlogListError />}
      />
      <Route
        path="/blogs/:id"
        element={<BlogDetail />}
        loader={blogDetailLoader}
        errorElement={<BlogDetailError />}
      />

      <Route path="new-blog" element={<NewBlog />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
