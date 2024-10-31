import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
const router = createBrowserRouter([
    {
        path : "/home",
        element : <DefaultLayout/>,
        children : [
            {
                path: "/home",
                element : <Home/>
            },
            {

            },
        ]
    },

    {
        path : "/",
        element : <GuestLayout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            }
        ]
    },

    {
        path : "*",
        element : <NotFound/>
    }

])

export default router;
