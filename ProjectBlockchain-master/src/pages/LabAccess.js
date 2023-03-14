import React, { useState } from "react";
//import PharmaAccess from "../components/PharmaDashboard/PharmaAccess";
//import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard"
import LabDashboard from "../components/LabDashboard/LabDashboard";
import Labaccess from "../components/LabDashboard/Labaccess";

const LabAccess = () => {
  return (
    <>
      <LabDashboard />  
      <Labaccess />
    </>
  );
};

export default LabAccess;