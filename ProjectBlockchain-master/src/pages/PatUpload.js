import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Pdashboard from '../components/Pdashboard/Pdashboard';
import Ddetail from "../components/Ddashboard/Ddetail";
import Daccess from "../components/Ddashboard/Daccess";
import Pupload from "../components/Pdashboard/Pupload";
const PatUpload = () => {
  return (
    <>
      <Pdashboard/>  
      <Pupload />
    </>
  );
};

export default PatUpload;