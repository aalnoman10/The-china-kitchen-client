import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LoadingToast, DismissToast } from '../Layout/Main';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (user) {
        return children
    }
    else if (loading) {
        LoadingToast('sd fsd')
        DismissToast()
        return <Toaster />
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;