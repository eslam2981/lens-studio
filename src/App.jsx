import Home from "./pages/Home.jsx";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <ArticleDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
