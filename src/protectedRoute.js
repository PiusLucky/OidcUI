import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth, isLoading } from 'oidc-react';

// No Need for this ::: "isLoading" will help us handle "null "
// Since data from oidc usually delay a little bit before populating
// let's simulate a fake throttling on load

// ...

const PrivateRoute = () => {
    const auth = useAuth();
    let location = useLocation();
    const user = auth.userData;
    return user ? <Outlet /> : <Navigate to="/" state={{ from: location }}/>;
}


export default PrivateRoute;
