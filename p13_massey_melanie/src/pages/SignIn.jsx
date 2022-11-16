import '../style/SignIn.css'

import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../api/apiCalls';
import * as loginSlice from '../feature/loginSlice';




function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateToken = useSelector((state)=>state.login.token)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    async function submitHandler(e) {
        e.preventDefault()
        const response = await getToken({email, password})
        console.log(response)
        
        if(response){
            dispatch(loginSlice.login({token:response}))
        }    
    }

    useEffect(()=>{
        if(stateToken){
            navigate("/userProfile")
        }
    })

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => submitHandler(e)}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(e) => setEmail(e.target.value)}/>
                    {/* <input type="text" id="username" /> */}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    {/* <input type="password" id="password" /> */}
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                {/* <NavLink to="/userProfile" className="sign-in-button">
                    Sign In
                </NavLink> */}
                {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                <button type='submit' className="sign-in-button">Sign In</button>
                
                </form>
            </section>
            </main>
    );
}

export default SignIn;