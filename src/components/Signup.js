import  react from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Signup() {
    const navigate = useNavigate();
    const [connected, toggleConnect] = useState(false);


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
            isWalletConnected();
            navigate("/Login");
          });
    };





    return(
        <div>
             <button className=" bg-[#000000] text-[#ffffff] " onClick={connectWebsite}>Connect wallet</button>
        </div>
        
    )

} 
export default Signup;
