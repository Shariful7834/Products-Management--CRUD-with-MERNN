import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import ManageProducts from "../pages/ManageProducts/ManageProducts";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

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
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
