import React from 'react';
import './App.css';

// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import { Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import DocDashboard from './pages/DocDashboard';
import PatDashboard from './pages/PatDashboard';
import SignupdocPage from './pages/signupDoc';
import Docdetail from './pages/Docdetail';
import Patdetail from './pages/Patdetail';
import Docaccess from './pages/Docaccess';
import Grantrevoke from './pages/Grantrevoke';
import DocUpload from './pages/DocUpload';
import PatUpload from './pages/PatUpload';
import Pataccess from './pages/Pataccess';
import SignupPharmapage from './pages/signupPharma';
import PharDashboardpage from './pages/PharDashboard';
import Phardetail from './pages/Phardetail';
import PharAccess from './pages/PharAccess';
import PharUpload from './pages/PharUpload';
import SignupLabpage from './pages/SignupLab';
import LabDashboardpage from './pages/LabDashboard';
import Labdetail from './pages/Labdetail';
import LabAccess from './pages/LabAccess';
import LabUploadpage from './pages/LabUpload';
import SignupInpage from './pages/signupIn';
import InDashboardpage from './pages/InDashboard';
import ResDashboardpage from './pages/ResDashboard';
import Indetail from './pages/Indetail';
import Resdetail from './pages/Resdetail';
import InAccess from './pages/InAccess';
import ResAccess from './pages/ResAccess';
import InUploadpage from './pages/InUpload';
import ResUploadpage from './pages/ResUpload';
import SignupRespage from './pages/signupRes';

import abi from "./contract/medRec.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { providers } from "ethers";
import { ContractAddress } from './contract/contract.js';
import { ContractAbi } from './contract/contract.js';


function App() {

  /*const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xC00Aac55D790a333aaD137cf62e3586699AD1a36";
      const contractABI = ContractAbi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);*/
  // console.log(state);
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/signup' element={<SigninPage/>} />
          <Route path='/signupDoc' element={<SignupdocPage/>} />
          <Route path='/signupPharma' element={<SignupPharmapage/>} />
          <Route path= '/SignupLab' element={<SignupLabpage/>} />
          <Route path= '/SignupIn' element={<SignupInpage/>} />
          <Route path= '/SignupRes' element={<SignupRespage/>} />

          <Route path='/DocDashboard' element={<DocDashboard/>} />
          <Route path='/PatDashboard' element={<PatDashboard/>} />
          <Route path='/PharmaDashboard' element={<PharDashboardpage/>} />
          <Route path='/LabDashboard' element={<LabDashboardpage/>} />
          <Route path='/InDashboard' element={<InDashboardpage/>} />
          <Route path='/ResDashboard' element={<ResDashboardpage/>} />


          <Route path='/Docdetail' element={<Docdetail/>} />
          <Route path='/Patdetail' element={<Patdetail/>} />
          <Route path='/Pharmadetail' element={<Phardetail />} />
          <Route path='/Labdetail' element={<Labdetail />} />
          <Route path='/Indetail' element={<Indetail />} />
          <Route path='/Resdetail' element={<Resdetail />} />


          <Route path='/accessRec' element={<Docaccess/>} />
          <Route path='/accessPrec' element={<Pataccess/>} />
          <Route path='/PharmaAccess' element={<PharAccess />} />
          <Route path='/LabaccessRec' element={<LabAccess />} />
          <Route path='/InaccessRec' element={<InAccess />} />
          <Route path='/ResaccessRec' element={<ResAccess />} />

          <Route path='/graRev' element={<Grantrevoke/>} />

          <Route path='/Uploadrec' element={<DocUpload/>} />
          <Route path='/UploadPrec' element={<PatUpload/>} />
          <Route path='/PharmaUpload' element={<PharUpload />} />
          <Route path='/LabUploadrec' element={<LabUploadpage />} />
          <Route path='/InUploadrec' element={<InUploadpage />} />
          <Route path='/ResUploadrec' element={<ResUploadpage />} />
          
          <Route path='/logout' element={<Home/>} />       
        
        </Routes>      
    </Router>
  );
}

export default App;
