import React from 'react';
import logo from '../images/TradesMatch-1.png';

function Navbar() {
  return (
    <div className="navbar-container">
      <img className="logo" src={logo} />
      <div className="navbar-links">
        <a className="links">Services</a>
        <a className="links">Home</a>
        <a className="links">About-Us </a>
      </div>
      <button className="sign-up-button">Sign-up</button>
    </div>
  );
}

export default Navbar;
