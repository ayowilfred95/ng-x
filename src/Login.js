import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import cont from "./utils/PatientHealthRecord.json";
import RegisterNewPatient from "./components/RegisterNewPatient";
import RegisterNewDoctor from "./components/RegisterNewDoctor";
import UpdatePatientAge from "./components/UpdatePatientAge";
import NewMedication from "./components/AddMedication";
import ViewMyRecords from "./components/ViewMyRecords";
import ApproveDoctor from "./components/ApproveDoctor";
import GetDoctorDetails from "./components/GetDoctorDetails";
import AddPrescription from "./components/AddPrescription";
import AddDiagnosis from "./components/AddDiagnosis";
import ViewDoctors from "./components/ViewDoctors";
import ViewPatientData from "./components/ViewPatientData";
import ViewMeds from "./components/ViewMedications";
import AddNewDependency from "./components/AddDependency";
import ViewDeps from "./components/ViewDependencies";


const addr = "0xE554D980C7aF1702FF93112686976a2c425A56F1";

function Login() {
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
    <div>
      <div className="shadow-md rounded px-8 pt-2 pb-4 mb-4 mt-4">
        <div className="text-gray-600 font-bold text-lg mb-2">
          Patient Record Ethereum Dapp
        </div>
        Welcome to the Patient Portal
      </div>
      <div className="rowC">
        <RegisterNewPatient contract={contract} />
        &nbsp;
        <UpdatePatientAge contract={contract} />
        &nbsp;
        <ViewDoctors contract={contract} /> &nbsp;
        <GetDoctorDetails contract={contract} /> &nbsp;
        <ApproveDoctor contract={contract} /> &nbsp;
        <ViewMyRecords contract={contract} />
      </div>
      <div className="rowC">
        <RegisterNewDoctor contract={contract} />
        &nbsp;
        <NewMedication contract={contract} />
        &nbsp;
        <ViewMeds contract={contract} />
        &nbsp;
        <AddDiagnosis contract={contract} />
        &nbsp;
        <AddPrescription contract={contract} />
        <ViewDeps contract={contract} />&nbsp;
      </div>

      <div>
        <ViewPatientData contract={contract} />
      </div>
      <div>
        <AddNewDependency contract={contract} />&nbsp;
      </div>
    </div>
  );
}

export default Login;
