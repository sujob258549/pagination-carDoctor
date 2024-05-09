import { useContext } from "react";
import  { CreatAuth } from "../Firebase/AuthContext";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user} = useContext(CreatAuth)
    if(user){
       return children
    }
    return <Navigate to={'/signin'} state={location?.pathname || '/'}></Navigate>
};

export default PrivateRouter;