import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import cont from "./utils/PatientHealthRecord.json";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link, 
  useRouteMatch,
  useParams 
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const addr = "0x02dAC730E5F328D9F455D5F8616deC2206F682aa";

function Login() {
  const [contract, setContract] = useState(undefined);
  const [open, setOpen ] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  

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

  const handleClick = async()=> {
    navigate("/");
  }

  return (
    <div className="flex container mx-auto rounded ">
      <div className={`bg-[#ffffff] h-screen p-5 pt-8 ${open ? "w-72"  : "w-20"} duration-300 container mx-auto rounded relative`}>
        
        <div className="rowC">
        
        <div className=" border-t-[2px] ">
        {location.pathname === "/UpdatePatientAge" ? 
                  <li className='block py-2 pr-4 pl-3 rounded-full-[12px] text-[#585858]  hover:bg-[#000000]  py-[8px] '>
                    <Link to="/UpdatePatientAge">UpdatePatientAge </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 rounded-full-[12px] pl-3 text-[#585858] hover:bg-[#000000]  py-[8px]'>
                    <Link to="/UpdatePatientAge">UpdatePatientAge</Link>
                  </li>              
                  }
        </div>
         
                  <div className=" border-t-[8px] ">
  
          {location.pathname === "/ViewDoctors" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000]  py-[8px] '>
                    <Link to="/ViewDoctors">ViewDoctors </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ViewDoctors">ViewDoctors</Link>
                  </li>              
                  }
                  </div>
         
          <div className=" border-t-[8px] ">
          {location.pathname === "/GetDoctorDetails" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px] '>
                    <Link to="/GetDoctorDetails">GetDoctorDetails </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000]  py-[8px]'>
                    <Link to="/GetDoctorDetails">GetDoctorDetails</Link>
                  </li>              
                  }
          </div>
          
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/ApproveDoctor" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]   py-[8px] '>
                    <Link to="/ApproveDoctor">ApproveDoctor </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ApproveDoctor">ApproveDoctor</Link>
                  </li>              
                  }
                   </div>
          
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/ViewMyRecord" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ViewMyRecord">ViewMyRecord </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ViewMyRecord">ViewMyRecord</Link>
                  </li>              
                  } 
                   </div>
         
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/RegisterNewPatient" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/RegisterNewPatient">RegisterNewPatient</Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/RegisterNewPatient">RegisterNewPatient</Link>
                  </li>              
                  } 
                  </div>
                  
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/RegisterNewdoctor" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]   py-[8px]'>
                    <Link to="/RegisterNewdoctor">RegisterNewdoctor</Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/RegisterNewdoctor">RegisterNewdoctor</Link>
                  </li>              
                  } 
                  </div>
                  
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/AddMedication " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px] '>
                    <Link to="/AddMedication ">AddMedication </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/AddMedication ">AddMedication </Link>
                  </li>              
                  }
                    </div>  
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/ViewMeds " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ViewMeds ">ViewMeds </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]   py-[8px]'>
                    <Link to="/ViewMeds ">ViewMeds </Link>
                  </li>              
                  }
                  </div>
                    
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/AddDiagnosis " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000] py-[8px]'>
                    <Link to="/AddDiagnosis ">AddDiagnosis </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000] py-[8px]'>
                    <Link to="/AddDiagnosis ">AddDiagnosis </Link>
                  </li>              
                  }
                   </div>
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/AddPrescription  " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000]  py-[8px] '>
                    <Link to="/AddPrescription ">AddPrescription  </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/AddPrescription ">AddPrescription </Link>
                  </li>              
                  }
                   </div>
                   
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/ViewDeps  " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ViewDeps  ">ViewDeps  </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]  hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ViewDeps  ">ViewDeps  </Link>
                  </li>              
                  }
                   </div>
                  
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/ViewPatientData  " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ViewPatientData">ViewPatientData  </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000]  py-[8px]'>
                    <Link to="/ViewPatientData  ">ViewPatientData  </Link>
                  </li>              
                  }
                  </div>
                 
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/AddNewDependency  " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000]  py-[8px]'>
                    <Link to="/AddNewDependency ">AddNewDependency  </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#585858]   hover:bg-[#000000]  py-[8px]'>
                    <Link to="/AddNewDependency  ">AddNewDependency  </Link>
                  </li>              
                  }
                  </div>
                  
        
        </div>
          </div>
        <div className="px-[200px] py-[20px] ">

          <h1 className="text-2xl font-semibold font-[16px] text-[#008753]"> Patient  and Doctor Dashboard </h1>
          <div className=" py-[20px] text-[#008753] ">

            <h1>1. For the sake of this project, same wallet address can be used to </h1>
              <h1>register both patient and doctor</h1>
          <h1>2. Only one doctor and patient is allowed with one address. We will work on the future improvements</h1>
          <h1>3. Patient and doctor has to be registered first</h1>
          <h1>4. The patient has to approve the doctor before he/she can view the patient data</h1>
          <h1>5. The doctor needs to add medication first before adding prescriptions</h1>
          <h1>6. Patient can update their age and also add dependencies in case of emergency</h1>
       
        </div>
        </div>
       
       
        <div className=" py-[20px]"> 
          <button className="w-[178px]   rounded-full-[12px] h-[56px]  text-center text-[#ffffff] bg-[#008753] rounded-[8px]  text-[18px] leading-[23px] " onClick={handleClick} >   Return back to Welcome Page</button>
        </div>
      

    </div>
  );
}

export default Login;
