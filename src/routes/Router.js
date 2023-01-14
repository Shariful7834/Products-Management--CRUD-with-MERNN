import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import ManageProducts from "../pages/ManageProducts/ManageProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/manageproducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
