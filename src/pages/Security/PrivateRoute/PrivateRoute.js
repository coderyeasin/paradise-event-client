import React from 'react';
import {
    useLocation,
    Navigate,
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
  


const PrivateRoute = ({ children, ...rest}) => {

    const { users, isLoading } = useAuth();
    
    const location = useLocation()
    
    if (isLoading) {
        return <div className="flex justify-center items-center">
        <div
            className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
        ></div>
    </div>
    }
    if (users?.email) {
        return children      
    }

    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;