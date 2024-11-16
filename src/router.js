import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import NewsPage from "./views/news/NewsPage";
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
            },
            {
                path : "/newspage/:id",
                element : <NewsPage/>
            }
        ]
    },

    {
        path : "*",
        element : <NotFound/>
    }

])

export default router;
