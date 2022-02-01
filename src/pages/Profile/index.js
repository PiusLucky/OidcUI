import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/styled/Footer/Footer";
import { useAuth } from 'oidc-react';


function App() {
  const auth = useAuth();
  const user = auth?.userData?.profile
  return (
  <div className="appContainer">
    <Header />
    <header className="prof_header">
      <h1>{user?.username}</h1>
      <h2>{user?.display_name}</h2>
      <h5 className="colorSub">{`{${user?.sub}}`}</h5>
    </header>
    <div className="profile-bio prof_header">
    <ul>
      <li><strong>Email: {user?.email}</strong></li>
      <li><strong>First Name: {user?.first_name}</strong></li>
      <li><strong>Last Name: {user?.last_name}</strong></li>
      <li><strong>Account Type: {user?.type}</strong></li>
    </ul>
    <hr />
    </div>
    <Footer />
  </div>
  );
}

export default App;
