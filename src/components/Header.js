import React, { Fragment } from "react";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <Fragment>
      <header className="clearfix header-style5">
        <div className="logo-place">
          <div className="container">
            <div className="inner-logo-place">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </Fragment>
  );
};

export default Header;
