import { createBrowserRouter } from "react-router-dom";
import Roots from "../assets/Root/Roots";
import Home from "../assets/Components/Home/Home";
import Signin from "../assets/Components/SigninAndSignUp/Signin";
import Signup from "../assets/Components/SigninAndSignUp/Signup";
import About2 from "../assets/Components/Home/About/About2";
import Contact from "../assets/Components/Contact/Contact";
import Contactinfo from "../assets/Components/Contact/Contactinfo";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/signin",
                element: <Signin></Signin>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About2></About2>,
               
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
               
            },
            {
                path: '/problem',
                element: <Contactinfo></Contactinfo>,
                loader: ()=> fetch('http://localhost:5000/contact')
               
            }
        ]
    }
])





export default router;