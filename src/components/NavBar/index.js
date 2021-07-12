import React from 'react';
import Logo from '../../images/Netflix-logo.png';
import './style.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <img src={Logo} alt = 'Netflix Logo' />
        </div>
    )
}

export default Navbar;
