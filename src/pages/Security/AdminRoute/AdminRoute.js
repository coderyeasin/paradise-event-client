import React from 'react';
import {
    useLocation,
    Navigate,
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest}) => {
   
    const { users, admin } = useAuth();
    
    const location = useLocation()

    if (users?.email && admin) {
        return children      
    }

    return <Navigate to="/dashboard" state={{ from: location }} />
};

export default AdminRoute;