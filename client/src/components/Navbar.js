import React from 'react';
import logo from '../images/tradesmatch-low-resolution-logo-black-on-transparent-background.png'

function Navbar() {
    return (
        <div className="navbar-container">
            <div className='logo-container'>
                <img className="logo" src={logo} />
            </div>
            <div className="navbar-links">
                <a className="links">Services</a>
                <a className="links">Home</a>
                <a className="links">About-Us </a>
            </div>
            <button className="Tradesman-sign-up-button"> Tradesman Sign-Up</button>
        </div>
    );
}

export default Navbar;
