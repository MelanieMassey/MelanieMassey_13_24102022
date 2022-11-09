import './Header.css';
import logo from '../../assets/argentBankLogo.png';

import { FaUserCircle } from 'react-icons/fa';

import React from 'react';
import { NavLink } from "react-router-dom"



/**
 * @returns Header component
 */
function Header() {
    return(
        
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                
                <div>
                    <NavLink to="/sign-in" className="main-nav-item">
                        <FaUserCircle className='fa fa-user-circle'/>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        
    );
}

export default Header;