import React from "react";
import { StyledFooter } from "./Footer.styled";
import IconTelephone from "../../svgs/IconTelephone";
import IconEmail from "../../svgs/IconEmail";
import Logo from "../../svgs/Logo";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { VscLocation } from "react-icons/vsc";

function Footer() {
  return (
    <StyledFooter>
      <Logo fill="currentColor" />
      <div>
        <div className="navItemWithIcon">
          <VscLocation className="icon icon-location" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="navItemWithIcon">
          <IconTelephone />
          <a href="tel:++1-543-123-4567"> +1-543-123-4567</a>
        </div>
        <div className="navItemWithIcon">
          <IconEmail />
          <a href="mailto:example@huddle.com">example@huddle.com</a>
        </div>
      </div>
      <ul>
        <li>About Us</li>
        <li>What We Do</li>
        <li>FAQ</li>
      </ul>
      <ul>
        <li>Career</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
      <div className="social-icons">
        <span className="social-icon">
          <ImFacebook />
        </span>
        <span className="social-icon">
          <ImTwitter />
        </span>
        <span className="social-icon">
          <ImInstagram />
        </span>
      </div>
      <small>
        <p>&copy; Copyright 2022 Huddle. All rights reserved.</p>

        <p className="attribution">
          Brighter 2022...
        </p>
      </small>
    </StyledFooter>
  );
}

export default Footer;
