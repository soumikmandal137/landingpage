import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import  Menu  from "../pages/menu/Menu";
import Chef from "../pages/chef/Chef";
import Blog from "../pages/blog/Blog";
import Singleblog from "../pages/blog/Singleblog";
import Contact from "../pages/Contact";
import Reservation from "../pages/Reservation";
import Addtocart from "../pages/addtocart/Addtocart";

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
        element:<Menu/>
      },
      {
        path: "chef",
        element:<Chef/>
      },
      {
        path: "blog",
        element:<Blog/>
      },
      {
        path:"blog/:id",
        element:<Singleblog/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"reservation",
        element:<Reservation/>
      },
      {
        path:"addtocart",
        element:<Addtocart/>
      },
    ],
  },
]);
export default Routes;
