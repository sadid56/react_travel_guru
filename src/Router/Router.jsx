import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import UserAccount from "../pages/UserAccount/UserAccount";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/userAccount',
                element: <PrivateRouter><UserAccount></UserAccount></PrivateRouter>
            }
        ]
    }
])
 
export default Router;