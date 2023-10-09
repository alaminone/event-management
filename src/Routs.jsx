import { createBrowserRouter } from "react-router-dom";
import Root from "./page/Root";
import Home from "./page/home/Home";
import Srvice from "./page/srvice/Srvice";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import NewEvent from "./page/newevent/NewEvent";
import ErrorPage from "./components/error/ErrorPage";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("/data.json")
            },
            {
                path:"/newevent/:id",
                element:<NewEvent></NewEvent>,
                loader:()=>fetch("/data.json")
            },
            {
                path:"/srvice",
                element:<Srvice></Srvice>,
                loader:()=>fetch("/data.json")
                
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])

export default Router;