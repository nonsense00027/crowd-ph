import React from "react";
import "./Header.css";
import logo from "../img/logo.png";
import { Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Container className="header__content">
        <div className="header__logo">
          <img src={logo} alt="" />
          <h2>crowd.ph</h2>
        </div>
        <div className="header__nav">
          <NavLink
            to="/"
            exact
            className="header__link"
            activeStyle={{ borderBottom: "2px solid #291b1b", color: "#000" }}
          >
            <h5>Home</h5>
          </NavLink>
          <NavLink
            to="/establishments"
            className="header__link"
            activeStyle={{ borderBottom: "2px solid #291b1b", color: "#000" }}
          >
            <h5>Establishments</h5>
          </NavLink>
          <h5>About Us</h5>
          <h5>Contact</h5>
        </div>
      </Container>
    </div>
  );
}

export default Header;
