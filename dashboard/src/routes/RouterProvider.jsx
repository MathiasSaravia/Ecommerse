import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Orders from "../pages/Orders";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children:[
        {
        path:"/",
        element:<Dashboard/>
        },
        {
        path:"/products",
        element:<Products/>
        },
        {
        path:"/users",
        element:<Users/>
        },
        {
        path:"/orders",
        element:<Orders/>
        }
        ,
        {
        path:"/generos",
        element:<Genres/>
        }
]
}])

export const ProvidieRouter = () => <RouterProvider router={router}/>