import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber/NavberHome";
import './main.css'
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
    return ( 
        <div className="">
            <Outlet></Outlet>
            <Toaster/>
        </div>
     );
}
 
export default MainLayout;