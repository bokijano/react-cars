import React from "react";
import "./Navbar.css";
import Logo from "./logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar-look">
      <img className="image-look" src={Logo} alt="navbar" />
      <p className="navbar-paragraph">All about cars</p>
    </nav>
  );
};

export default Navbar;
