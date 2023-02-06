import React from 'react';
import logo from '../images/tradesmatch-low-resolution-logo-black-on-transparent-background.png'
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar-container">
            <div className='logo-container'>
                <img className="logo" src={logo} />
            </div>
            <div className="navbar-links">
                <Link className="links" to='/services'>Services</Link>
                <Link className="links" to='/'>Home</Link>
                <Link className="links" to='#'>About-Us </Link>
            </div>
            <button className="Tradesman-sign-up-button"> Tradesman Sign-Up</button>
        </div>
    );
}

export default Navbar;
