import React from 'react';
import Header from "../../components/Header/Header";
import HomeContent from "../../components/styled/HomeContent";
import Footer from "../../components/styled/Footer/Footer";

const Home = () => {
  return (
    <div className="appContainer">
        <Header />
        <HomeContent />
        <Footer />
      </div>
  )
};

export default Home;
