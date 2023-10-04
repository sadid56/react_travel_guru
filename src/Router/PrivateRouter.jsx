import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="flex justify-center h-[100vh] items-center"><span className="loading loading-bars loading-lg"></span></div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
}
 
export default PrivateRouter;