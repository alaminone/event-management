import { createBrowserRouter } from "react-router-dom";
import Root from "./page/Root";
import Home from "./page/home/Home";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default Router;