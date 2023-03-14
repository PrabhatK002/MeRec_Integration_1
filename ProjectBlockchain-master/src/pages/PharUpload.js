import React, { useState } from "react";
import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard";
import PharmaUpload from "../components/PharmaDashboard/PharmaUpload";
const PharUpload = () => {
  return (
    <>
      <PharmaDashboard/>  
      <PharmaUpload />
    </>
  );
};

export default PharUpload;