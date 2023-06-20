import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../../Layout/MainLayout");
const { Children } = require("react");

const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/contact",
                element : <Contact></Contact>
            }
        ]

    }
])
export default router;