import React, { useState } from "react";
import Logo from "../svgs/Logo";
import IllustrationMockups from "../svgs/IllustrationMockups";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../styled/Button/Button.styled";
import { useAuth } from 'oidc-react';


function Header() {
  const auth = useAuth();
  const user = auth?.userData
  return (
    <StyledHeader>
      <nav>
        <Logo />
        {!user?
        <StyledButton color={`#111`} bg={"#fff"} onClick={() => auth.signIn()}>
          Get Started
        </StyledButton>
        :
        <StyledButton color={`#111`} bg={"#fff"} onClick={() => auth.signOut()}>
          Sign Out
        </StyledButton>
        }
      </nav>
      {(!user) &&
      <section className="headerContent">
        <article>
          <h1>Let's integrate OpenId </h1>
          <p>
          OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner.
          </p>
          <StyledButton onClick={() => auth.signIn()}>Get Started </StyledButton>
        </article>
        <IllustrationMockups />
      </section>
      }
    </StyledHeader>
  );
}

export default Header;
