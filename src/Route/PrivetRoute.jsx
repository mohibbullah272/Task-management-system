import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <p>Please wait</p>
    }
    if(user){
        return children
    }
    return (
      <Navigate to={'/authPage'}></Navigate>
    );
};

export default PrivetRoute;