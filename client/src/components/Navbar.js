import React from 'react'

function Navbar() {
    return (
        <div className='navbar-container'>
            <img className='logo' />
            <div className='navbar-links' >
                <a className='links'>Services</a>
                <a className='links'>Home</a>
                <a className='links'>About-Us </a>
            </div>
        <button className='sign-up-button'>Sign-up</button>
        </div>
    )
}

export default Navbar