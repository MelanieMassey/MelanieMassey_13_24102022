import './Header.css';
import logo from '../../assets/argentBankLogo.png';

import { FaUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

import React from 'react';
import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as loginSlice from '../../feature/loginSlice';



/**
 * @returns Header component
 */
function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const stateIsConnected = useSelector((state) => state.isConnected)
    const firstName = useSelector((state) => state.firstName)

    function handleLogout(e) {
        e.preventDefault();
        dispatch(loginSlice.logout())
        navigate("/")
    }

    return(
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    {stateIsConnected?(
                        <>
                            <NavLink to="/sign-in" className="main-nav-item">
                                <FaUserCircle className='fa fa-user-circle'/>
                                {firstName}
                            </NavLink>
                            <button type="button" className="main-nav-item" onClick={(e) => handleLogout(e)}>
                                <MdLogout className='MdLogout'/>
                                Sign Out
                            </button>
                        </>
                    ):(
                        <NavLink to="/sign-in" className="main-nav-item">
                            <FaUserCircle className='fa fa-user-circle'/>
                            Sign In
                        </NavLink>
                    )}
                </div>
                
            </nav>
        
    );
}

export default Header;