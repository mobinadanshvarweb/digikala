import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Blog from "./Blog";
import Categori from "./category/Categori";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Blog /> },
      { path: "/home", element: <Categori /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
