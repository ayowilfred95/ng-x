import fullLogo from '../full_logo.png';
import { ethers } from "ethers";
import abi from "../utils/PatientHealthRecord.json";
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    useRouteMatch,
    useParams 
} from "react-router-dom";
import  React, {useEffect, useState} from 'react';
import { useLocation }  from 'react-router';
import RegisterNewPatient from "./RegisterNewPatient";
import RegisterNewDoctor from "./RegisterNewDoctor";


const addr = "0x0c0458fd9C2dac9717c2a901d357050A7C596f77";


function Navbar() {

const [contract, setContract] = useState(undefined);
const [connected, toggleConnect] = useState(false);
const location = useLocation();
const [currAddress, updateAddress] = useState('0x');

    useEffect(() => {
      const init = async () => {
        if (typeof window.ethereum !== "undefined") {
          //console.log(typeof window.ethereum);
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract_ = new ethers.Contract(addr, contract.abi, signer);
          setContract(contract_);
        } else {
          return <div>Please install metamask!</div>;
        }
      };
      init();
    }, []);
    async function getAddress() {
        const ethers = require("ethers");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        updateAddress(addr);
      }
    function updateButton() {
        const ethereumButton = document.querySelector('.enableEthereumButton');
        ethereumButton.textContent = "Connected";
        ethereumButton.classList.remove("hover:bg-blue-70");
        ethereumButton.classList.remove("bg-blue-500");
        ethereumButton.classList.add("hover:bg-blue-70");
        ethereumButton.classList.add("bg-blue-500");
      }
    async function connectWebsite() {
  
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if(chainId !== '0x5')
        {
          //alert('Incorrect network! Switch your metamask network to Rinkeby');
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x5' }],
         })
        }  
        await window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(() => {
            updateButton();
            console.log("here");
            getAddress();
            window.location.replace(location.pathname)
          });
    }
    
      useEffect(() => {
        let val = window.ethereum.isConnected();
        if(val)
        {
          console.log("here");
          getAddress();
          toggleConnect(val);
          updateButton();
        }
    
        window.ethereum.on('accountsChanged', function(accounts){
          window.location.replace(location.pathname)
        })
      });
  


    return (
      <div className="">
        <nav className="w-screen">
          <ul className='flex items-end justify-between py-3 bg-transparent text-[#008753] pr-5'>
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            <img src={fullLogo} alt="" width={120} height={120} className="inline-block -mt-2"/>
            <div className='inline-block font-bold text-xl ml-2'>
              Welcome Page
            </div>
            </Link>
          </li>
          <li className='w-2/6'>
            <ul className='lg:flex justify-between font-bold mr-10 text-lg'>
              {location.pathname === "/" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/RegisterNewPatient" >RegisterNewPatient </Link> &nbsp;
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/RegisterNewPatient" >Register New Patient </Link>
              </li>              
              }
              {location.pathname === "/sellNFT" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/RegisterNewdoctor" >Register New Doctor</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/RegisterNewdoctor"  >Register New Doctor</Link>
              </li>              
              }    
              {location.pathname === "/sellNFT" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/ViewMyRecords" >ViewMyRecords</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/ViewMyRecords"  >ViewMyRecords</Link>
              </li>              
              }             
              {location.pathname === "/profile" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>              
              }  
             <li>
             <button className="enableEthereumButton rounded-full bg-[#008753] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={connectWebsite}>{connected? "Connected":"Connect Wallet"}</button> 
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        <div className='text-white text-bold text-right mr-10 text-sm'>
          {currAddress !== "0x" ? "Connected to":"Not Connected. Please login to register"} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
        </div>
      </div>
    );
  }

  export default Navbar;
