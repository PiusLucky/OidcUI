import React from 'react';
import { useAuth } from 'oidc-react';
import Nav from "../../components/styled/header/Nav/Nav";
import Header from "../../components/Header/Header";
import Content from "../../components/styled/Content/Content";
import HomeContent from "../../components/styled/HomeContent";
import Footer from "../../components/styled/Footer/Footer";

const Home = () => {
  const auth = useAuth();
  return (
    <div className="appContainer">
        <Header />
        <HomeContent />
        <Footer />
      </div>
  )
};

export default Home;
