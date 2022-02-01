import React from 'react';
import {
  Navigate,
  Outlet,
  useLocation
} from 'react-router-dom';
import {
  useAuth
} from 'oidc-react';
import App from './App'

const PrivateRoutes = () => {
  const auth = useAuth();
  let location = useLocation();
  const user = auth && auth.userData;
  if (user) {
    return <Outlet / >
  } else {
    return <App / >
  }
  return <App / > ;
}


export default PrivateRoutes;
