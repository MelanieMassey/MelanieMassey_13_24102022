import './style/App.css';

import Header from './components/Header/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import UserProfile from './pages/UserProfile';
import Footer from './components/Footer/Footer';

import React from 'react';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
