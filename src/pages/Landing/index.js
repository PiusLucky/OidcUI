import React from 'react';
import { useAuth } from 'oidc-react';
import Home from '../Home/index';
import Header from "../../components/Header/Header";
import Content from "../../components/styled/Content/Content";
import Footer from "../../components/styled/Footer/Footer";

const LoggedIn = () => {
  const auth = useAuth();
  return (
    <div className="appContainer">
        <Header />
        <Footer />
      </div>
  )
};

export default LoggedIn;
