import React from 'react';
import App from './App';
import Profile from './pages/Profile';
import Home from './pages/Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/Global.styled";
import theme from "./theme";
import { AuthProvider } from 'oidc-react';
import PrivateRoutes from './protectedRoute';

import oidcConfig from './config'
import { Navigate, Outlet } from 'react-router-dom';
const PageNotFound = () => <div>Page not found</div>;


render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  <BrowserRouter>
  <AuthProvider {...oidcConfig}>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/oauth-callback" element={<App />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </AuthProvider>
  </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
