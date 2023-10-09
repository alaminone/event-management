/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContex } from "../../components/provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user,lodding} = useContext(AuthContex);

    if(lodding){
        return <div className="flex justify-center items-center mt-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivetRout;