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
import { BsArrowLeftShort } from "react-icons/bs";


const addr = "0xB9AA926FF44fbf4E828781d22d21fceC2e0298d9";

function Login() {
  const [contract, setContract] = useState(undefined);
  const [open, setOpen ] = useState(true);

  

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
    <div className="flex">
      <div className={`bg-[#008753] h-screen p-5 pt-8 ${open ? "w-72"  : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-[#008753 ] text-dark-purple text-3xl rounded-full absolute -right-3 top-9 
        border border-dark-purple cursor-pointer ${!open && "rotate-180"} `} onClick={()=> setOpen (!open)} />
          </div>
        <div className="p-7">
          <h1 className="text-2xl font-semibold text-[#F2F2F2] bg-[#008753]"> Patient Dashboard </h1>
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
