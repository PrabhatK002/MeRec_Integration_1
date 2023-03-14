import React, { useState } from "react";
import PharmaAccess from "../components/PharmaDashboard/PharmaAccess";
import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard"

const PharAccess = () => {
  return (
    <>
      <PharmaDashboard />  
      <PharmaAccess />
    </>
  );
};

export default PharAccess;