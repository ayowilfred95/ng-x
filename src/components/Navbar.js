import fullLogo from '../full_logo.png';
import { ethers } from "ethers";
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    useRouteMatch,
    useParams 
} from "react-router-dom";
import  React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Login from '../Login';


function Navbar() {
const [connected, toggleConnect] = useState(false);
const location = useLocation();
const [currAddress, updateAddress] = useState('0x');

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
        if(chainId !== '0x13881')
        {
          //alert('Incorrect network! Switch your metamask network to Rinkeby');
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x13881'}],
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
      <div className="container mx-auto ">
        <nav className="p-2 w-screen">
          <ul className='flex items-end justify-between py-4 bg-transparent text-[#008753] pr-5'>
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
                <Link to="/" >WelcomePage </Link> &nbsp;
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/" >WelcomePage</Link>
              </li>              
              }
              {location.pathname === "/Login" ? 
                <li className='block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent text-white'>
                  <Link to="/Login">Login</Link>
                </li>
                :
                <li className='block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent text-white'>
                  <Link to="/Login">Login</Link>
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
