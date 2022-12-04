import  react from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ethers } from 'ethers';




function Signup() {
    const navigate = useNavigate();
    const [currentAccount, setCurrentAccount] = useState("");


    // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({method: 'eth_accounts'})
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }
  const connectWallet = async () => {
    try {
      const {ethereum} = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async()=>{
    navigate("/Login");
  }

  useEffect(() => {
    
    let val = window.ethereum.isConnected();
    if(val)
    {
      console.log("here");
      isWalletConnected();
    }
   
  }, []);

  




    return(
      <div>
         <div className=" shadow-[20px_57px_80px_75px_rgba(0,0,0,0.25)] container mx-auto rounded">
              <div className="  flex item-stretch  grid grid-cols-1 py-[250px]  place-items-center " >
            <h1 className=" text-[#008753] font-['Inter']  leading-[40px] font-[900] text-[32px] " >Connect Wallet</h1>
            <h1  className=" text-[#7B7B7B] py-[20px] font-[600] text-[18px] leading-[23px]  " >connect your wallet to get started</h1>
             <button className=" w-[178px]   rounded-full-[12px] h-[56px]  text-center text-[#ffffff] bg-[#008753] rounded-[8px]  text-[18px] leading-[23px] " onClick={connectWallet}>Connet Wallet</button>
             <div className=" py-[30px] " >
             <button className=" w-[178px]   rounded-full-[12px] h-[56px]  text-center text-[#ffffff] bg-[#008753] rounded-[8px]  text-[18px] leading-[23px] " onClick={handleSubmit}>Dashboard</button>
             {currentAccount && (<h1>Wallet connected</h1>)}
             </div>
             
        </div>
        </div>
      </div>
       
      
        
    )

} 
export default Signup;
