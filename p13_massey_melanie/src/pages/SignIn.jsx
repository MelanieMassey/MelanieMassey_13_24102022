import '../style/SignIn.css'

import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUserInfo } from '../api/apiCalls';
import * as loginSlice from '../feature/loginSlice';




function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateToken = useSelector((state)=>state.token)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    
    const localStorageEmail = localStorage.getItem("email")
    console.log(localStorageEmail)
    
    async function handleSubmit(e) {
        e.preventDefault()
        const token = await getToken({email, password})
        console.log(password)
        console.log(token)
        console.log(rememberMe)
        
        if(token && rememberMe){
            dispatch(loginSlice.login({token:token}))
            localStorage.setItem("email", email)
        } else if(token && !rememberMe) {
            dispatch(loginSlice.login({token:token}))
            localStorage.removeItem("email")
        } else if(token){
            dispatch(loginSlice.login({token:token}))
        }
    }

    async function getUser(){
        const userInfo = await getUserInfo(stateToken);
        console.log(userInfo)
        dispatch(loginSlice.getUser({firstName: userInfo.firstName, lastName: userInfo.lastName, email: userInfo.email}))
    }


    useEffect(()=>{
        if(stateToken){
            getUser()
            navigate("/userProfile")
        }
    })

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder={localStorageEmail} onChange={(e) => setEmail(e.target.value)}/>
                    {/* <input type="text" id="username" /> */}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    {/* <input type="password" id="password" /> */}
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" onChange={(e) => setRememberMe(!rememberMe)}/>
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