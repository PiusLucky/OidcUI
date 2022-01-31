import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Content from "../../components/styled/Content/Content";
import Footer from "../../components/styled/Footer/Footer";
import { useAuth } from 'oidc-react';


function App() {
  const auth = useAuth();
  const user = auth?.userData?.profile
  console.log(user);
  return (
    <div className="appContainer">
      <Header />
       <aside className="profile-card">
  <header>
    <a target="_blank" href="#">
      <img
        src="https://robohash.org/c6df340b42802a610beb6a029d1af0c0?set=set4&bgset=&size=200x200"
        className="hoverZoomLink"
        alt="little bluish cat"
      />
    </a>
    {/* the username */}
    <h1>{user?.username}</h1>
    {/* and role or location */}
    <h2>{user?.display_name}</h2>
  </header>

  <div className="profile-bio">
    <p>
      <ul>
      <li><strong>Email: {user?.email}</strong></li>
      <li><strong>First Name: {user?.first_name}</strong></li>
      <li><strong>Last Name: {user?.last_name}</strong></li>
      <li><strong>Account Type: {user?.type}</strong></li>
      </ul>
    </p>
    <hr />
  </div>

</aside>
      <Footer />
    </div>
  );
}

export default App;
