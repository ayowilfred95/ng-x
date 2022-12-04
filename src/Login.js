import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import cont from "./utils/PatientHealthRecord.json";
import { BsArrowLeftShort } from "react-icons/bs";
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
    <div className="flex">
      <div className={`bg-[#ffffff] h-screen p-5 pt-8 ${open ? "w-72"  : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-[#008753 ] text-dark-purple text-3xl rounded-full absolute -right-3 top-9 
        border border-dark-purple cursor-pointer ${!open && "rotate-180"} `} onClick={()=> setOpen (!open)} />
        <div className="rowC">
        
        <div className=" border-t-[8px] ">
        {location.pathname === "/UpdatePatientAge" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753]  py-[8px] '>
                    <Link to="/UpdatePatientAge">UpdatePatientAge </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753]  py-[8px]'>
                    <Link to="/UpdatePatientAge">UpdatePatientAge</Link>
                  </li>              
                  }
        </div>
         
                  <div className=" border-t-[8px] ">
  
          {location.pathname === "/ViewDoctors" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px] '>
                    <Link to="/ViewDoctors">ViewDoctors </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewDoctors">ViewDoctors</Link>
                  </li>              
                  }
                  </div>
         
          <div className=" border-t-[8px] ">
          {location.pathname === "/GetDoctorDetails" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px] '>
                    <Link to="/GetDoctorDetails">GetDoctorDetails </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/GetDoctorDetails">GetDoctorDetails</Link>
                  </li>              
                  }
          </div>
          
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/ApproveDoctor" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px] '>
                    <Link to="/ApproveDoctor">ApproveDoctor </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ApproveDoctor">ApproveDoctor</Link>
                  </li>              
                  }
                   </div>
          
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/ViewMyRecord" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewMyRecord">ViewMyRecord </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewMyRecord">ViewMyRecord</Link>
                  </li>              
                  } 
                   </div>
         
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/RegisterNewPatient" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/RegisterNewPatient">RegisterNewPatient</Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/RegisterNewPatient">RegisterNewPatient</Link>
                  </li>              
                  } 
                  </div>
                  
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/Login" ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/RegisterNewdoctor">RegisterNewdoctor</Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/RegisterNewdoctor">RegisterNewdoctor</Link>
                  </li>              
                  } 
                  </div>
                  
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/AddMedication " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px] '>
                    <Link to="/AddMedication ">AddMedication </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/AddMedication ">AddMedication </Link>
                  </li>              
                  }
                    </div>  
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/ViewMeds " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewMeds ">ViewMeds </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewMeds ">ViewMeds </Link>
                  </li>              
                  }
                  </div>
                    
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/AddDiagnosis " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/AddDiagnosis ">AddDiagnosis </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/AddDiagnosis ">AddDiagnosis </Link>
                  </li>              
                  }
                   </div>
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/AddPrescription  " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px] '>
                    <Link to="/AddPrescription ">AddPrescription  </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/AddPrescription ">AddPrescription </Link>
                  </li>              
                  }
                   </div>
                   
                   <div className=" border-t-[8px] ">
                   {location.pathname === "/ViewDeps  " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewDeps  ">ViewDeps  </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewDeps  ">ViewDeps  </Link>
                  </li>              
                  }
                   </div>
                  
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/ViewPatientData  " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewPatientData">ViewPatientData  </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/ViewPatientData  ">ViewPatientData  </Link>
                  </li>              
                  }
                  </div>
                 
                  <div className=" border-t-[8px] ">
                  {location.pathname === "/AddNewDependency  " ? 
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/AddNewDependency ">AddNewDependency  </Link>
                  </li>
                  :
                  <li className='block py-2 pr-4 pl-3 text-[#ffffff] bg-[#008753] py-[8px]'>
                    <Link to="/AddNewDependency  ">AddNewDependency  </Link>
                  </li>              
                  }
                  </div>
                  
        
        </div>
          </div>
        <div className="p-7">
          <h1 className="text-2xl font-semibold text-[#008753]"> Patient  and Doctor Dashboard </h1>
        </div>

        <div> 
          <button className="text-[#ffffff] bg-[#008753] " onClick={handleClick} >Return back to Welome Page</button>
        </div>
      

    </div>
  );
}

export default Login;
