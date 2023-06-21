import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Share/Login/Login";
import Signup from "../../Pages/Share/Signup/Signup";

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
                path : "/home",
                element : <Home></Home>
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/contact",
                element : <Contact></Contact>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/signup",
                element : <Signup></Signup>
            },
        ]

    }
])
export default router;