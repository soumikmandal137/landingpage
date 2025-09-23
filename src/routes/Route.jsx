import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Menu from "../pages/menu/Menu";
import Chef from "../pages/chef/Chef";
import Blog from "../pages/blog/Blog";
import Singleblog from "../pages/blog/Singleblog";
import Contact from "../pages/Contact";
import Reservation from "../pages/Reservation";
import Addtocart from "../pages/addtocart/Addtocart";
import Dashboard from "../pages/admin/Dashboard";
import AdminWrapper from "../layout/admin/Wrapper";
import Product from "../pages/admin/product/Product";
import ProductAdd from "../pages/admin/product/ProductAdd";
import User from "../pages/admin/user/User";
import UserAdd from "../pages/admin/user/UserAdd";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "chef",
        element: <Chef />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <Singleblog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "addtocart",
        element: <Addtocart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminWrapper />,
    children: [
      {
        path: "dashabord",
        element: <Dashboard />,
      },
      {
        path: "list",
        element: <Product />,
      },
       {
        path: "add",
        element: <ProductAdd />,
      },

{
            path: "productedit/:id",
            element: <ProductAdd />,
          },
          
        
          {
            path: "userlist",
            element: <User />,
          },
          {
            path: "useradd",
            element: <UserAdd />,
          },
          {
            path: "useredit/:id",
            element: <UserAdd />,
          },


    ],
  },
]);
export default Routes;
