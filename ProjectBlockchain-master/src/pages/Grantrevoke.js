import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Ddashboard from '../components/Ddashboard/Ddashboard';
import Pdashboard from '../components/Pdashboard/Pdashboard';
import Pdetail from "../components/Pdashboard/Pdetail";
import Pgrantrev from "../components/Pdashboard/Pgrantrev";

const Grantrevoke = () => {
  return (
    <>
      <Pdashboard/>   
      <Pgrantrev/> 
    </>
  );
};

export default Grantrevoke;