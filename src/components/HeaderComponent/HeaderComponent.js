import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="page-header">
          <Link to="/" style={{ color: "#f0f0f0" }}>
            Movie WebApp
          </Link>
        </div>
        <div className="navbar-dark"></div>
      </div>
    );
  }
}

export default Header;
