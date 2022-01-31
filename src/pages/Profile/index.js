import React from "react";
import Header from "../../components/Header/Header";
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
    <img
      src="https://robohash.org/c6df340b42802a610beb6a029d1af0c0?set=set4&bgset=&size=200x200"
      className="hoverZoomLink"
      alt="little bluish cat"
    />
    <h1>{user?.username}</h1>
    <h2>{user?.display_name}</h2>
  </header>

  <div className="profile-bio">
    <p>
      <ul>
      <li><strong>Email:</strong> {user?.email}</li>
      <li><strong>First Name: </strong> {user?.first_name}</li>
      <li><strong>Last Name: </strong> {user?.last_name}</li>
      <li><strong>Account Type: </strong> {user?.type}</li>
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
