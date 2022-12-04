
import { ethers } from "ethers";
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import WelcomePage from "./components/WelcomePage";
import Navbar from "./components/Navbar";
import cont from "./utils/PatientHealthRecord.json";
import ViewMyRecords from "./components/ViewMyRecords";
import RegisterNewPatient from "./components/RegisterNewPatient";
import RegisterNewDoctor from "./components/RegisterNewDoctor";
import ApproveDoctor from "./components/ApproveDoctor";
import GetDoctorDetails from "./components/GetDoctorDetails";
import ViewDoctors from "./components/ViewDoctors";
import UpdatePatientAge from "./components/UpdatePatientAge";
import AddMedication from "./components/AddMedication";
import AddPrescription from "./components/AddPrescription";
import AddDiagnosis from "./components/AddDiagnosis";

import ViewPatientData from "./components/ViewPatientData";
import ViewMeds from "./components/ViewMedications";
import AddNewDependency from "./components/AddDependency";
import ViewDeps from "./components/ViewDependencies";
import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";


const addr = "0x02dAC730E5F328D9F455D5F8616deC2206F682aa";

function App() {
  const [contract, setContract] = useState(undefined);


  

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== "undefined") {
        //console.log(typeof window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract_ = new ethers.Contract(addr, cont.abi, signer);
        setContract(contract_);
      } else {
        return <div>Please install metamask!</div>;
      }
    };
    init();
  }, []);
 

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/Login" element={<Login />}/> 
      <Route path="/ViewMyRecord" element={<ViewMyRecords contract={contract} />}/> 
      <Route path="/RegisterNewPatient" element={<RegisterNewPatient contract={contract} />}/> 
      <Route path="/RegisterNewDoctor" element={<RegisterNewDoctor contract={contract} />}/>
      <Route path="/ApproveDoctor" element={<ApproveDoctor contract={contract} />}/>
      <Route path="/GetDoctorDetails" element={<GetDoctorDetails contract={contract} />}/>
      <Route path="/ViewDoctors" element={<ViewDoctors contract={contract} />}/>
      <Route path="/UpdatePatientAge" element={<UpdatePatientAge contract={contract} />}/>
      <Route path="/AddMedication" element={<AddMedication contract={contract} />}/>
      <Route path="/AddPrescription" element={<AddPrescription contract={contract} />}/>
      <Route path="/AddDiagnosis" element={<AddDiagnosis contract={contract} />}/>
      <Route path="/ViewPatientData" element={<ViewPatientData contract={contract} />}/>
      <Route path="/ViewMeds" element={<ViewMeds contract={contract} />}/>
      <Route path="/AddNewDependency" element={<AddNewDependency contract={contract} />}/>
      <Route path="/ViewDeps" element={<ViewDeps contract={contract} />}/>
      <Route path="/Signup" element={<Signup />} />
       
    </Routes>

   
  </div>
  );
}

export default App;
