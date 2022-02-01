import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import {
  useAuth
} from 'oidc-react';
import App from './App'

const PrivateRoutes = () => {
  const auth = useAuth();
  const user = auth && auth.userData;
  if (user) {
    return <Outlet / >
  } 
  return <App / > ;
}


export default PrivateRoutes;
