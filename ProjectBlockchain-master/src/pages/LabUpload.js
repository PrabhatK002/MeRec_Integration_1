import React, { useState } from "react";
import PharmaDashboard from "../components/PharmaDashboard/PharmaDashboard";
import PharmaUpload from "../components/PharmaDashboard/PharmaUpload";
import LabDashboard from "../components/LabDashboard/LabDashboard";
import Labupload from "../components/LabDashboard/Labupload"
const LabUploadpage = () => {
  return (
    <>
      <LabDashboard/>  
      <Labupload />
    </>
  );
};

export default LabUploadpage;