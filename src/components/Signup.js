import  react from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';




function Signup() {
    const navigate = useNavigate();
    const [connected, toggleConnect] = useState(false);
    const [currAddress, updateAddress] = useState('0x')
    const location = useLocation();

    async function getAddress() {
      const ethers = require("ethers");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const addr = await signer.getAddress();
      updateAddress(addr);
    }

   
    async function connectWebsite() {
  
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if(chainId !== '0x13881')
        {
          //alert('Incorrect network! Switch your metamask network to Mumbai');
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x13881'}],
         })
        }  
        await window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(() => {
            console.log("here");
            getAddress();
            window.location.replace(location.pathname)
          
          });
        
    }
    const handleSubmit = async() => {
      navigate("/Login");
    }
    useEffect(() => {
      let val = window.ethereum.isConnected();
      if(val)
      {
        console.log("here");
        getAddress();
        toggleConnect(val);
      }
  
      window.ethereum.on('accountsChanged', function(accounts){
        window.location.replace(location.pathname)
      })
    });





    return(
        <div className=" shadow-[20px_57px_80px_75px_rgba(0,0,0,0.25)] container mx-auto rounded">
              <div className="  flex item-stretch  grid grid-cols-1 py-[250px]  place-items-center " >
            <h1 className=" text-[#008753] font-['Inter']  leading-[40px] font-[900] text-[32px] " >Connect Wallet</h1>
            <h1  className=" text-[#7B7B7B] py-[20px] font-[600] text-[18px] leading-[23px]  " >connect your wallet to get started</h1>
             <button className=" w-[178px]   rounded-full-[12px] h-[56px]  text-center text-[#ffffff] bg-[#008753] rounded-[8px]  text-[18px] leading-[23px] " onClick={connectWebsite}>{connected? "Connected":"Connect Wallet"}</button>
             <div className=" py-[30px] " >
             <button className=" w-[178px]   rounded-full-[12px] h-[56px]  text-center text-[#ffffff] bg-[#008753] rounded-[8px]  text-[18px] leading-[23px] " onClick={handleSubmit}>Dashboard</button>
             </div>
             
        </div>
        < hr/>
          <div className='text-white text-bold text-right mr-10 text-sm'>
            {currAddress !== "0x" ? "Connected to":"Not Connected. Please login to get started"} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
          </div>
        </div>
      
        
    )

} 
export default Signup;
