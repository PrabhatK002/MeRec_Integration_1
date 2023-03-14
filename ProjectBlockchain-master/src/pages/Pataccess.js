import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Pdashboard from '../components/Pdashboard/Pdashboard';
import Ddetail from "../components/Ddashboard/Ddetail";
import Paccess from "../components/Pdashboard/Paccess";
const Pataccess = () => {
  return (
    <>
      <Pdashboard/>  
      <Paccess />
    </>
  );
};

export default Pataccess;