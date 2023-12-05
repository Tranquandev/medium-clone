import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import PostCreate from "@/pages/PostCreate";
import PostDetail from "@/pages/PostDetail";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/posts/:slug",
        element: <PostDetail />,
      },
      {
        path: "/posts/:slug",
        element: <PostDetail />,
      },
      {
        path: "/posts/create",
        element: <PostCreate />,
      },
    ],
  },
]);
export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
