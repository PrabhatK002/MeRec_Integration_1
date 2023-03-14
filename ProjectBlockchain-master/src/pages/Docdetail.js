import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Ddashboard from '../components/Ddashboard/Ddashboard';
import Ddetail from "../components/Ddashboard/Ddetail";
const Docdetail = () => {
  return (
    <>
      <Ddashboard/>  
      <Ddetail />
    </>
  );
};

export default Docdetail;