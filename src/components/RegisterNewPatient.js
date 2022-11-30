import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import abi from "../utils/PatientHealthRecord.json";

function RegisterNewPatient() {

  // Contract Address and ABI
  const contractAddress = "0xBE80A0b46bC11c0981f1c5cab379C7458456664F";
  const contractAbi = abi.abi;

  // Component state
  const [currentAccount, setCurrentAccount] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const onNameChange = (event) =>{
    setName(event.target.value);
  };
  
 
  const onAgeChange = (event) =>{
    setAge(event.target.value);
  }
  const onGenderChange = (event) =>{
    setGender(event.target.value);
  }
  
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




  const registerNewPatient = async () => {
    try {
      const { ethereum } = window;
      if(ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        console.log("registerNewPatient..");
        const response = await contract.registerNewPatient();
        console.log("patient health record", response.patient);
        console.log("patient health record done");
        setName(" ");
        setAge("");
        setGender("");
      }
      
    } catch (error) {
      console.log(error);
      
    }

};




return (
  <form onSubmit={registerNewPatient}>
    <div className="w-full border-4 p-2 mb-4 rounded border-gray-400">
      <div className="text-gray-600 font-bold text-md mb-2">
        Register New Patient:
      </div>

      <label>Full Name: </label>

      <input
        className="border 2 border-rose-500 bg-slate-300"
        type="text"
        id="name"
       
        required
      />

      <div>
        <label>Gender: </label>
        <input
          className="border 2 border-rose-500 bg-slate-300"
          type="text"
          id="gender"
          required
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          className="border 2 border-rose-500 bg-slate-300"
          type="number"
          id="age"
          required
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full"
        type="submit"
        
      >
        Submit
      </button>
    </div>
  </form>
);

}
export default RegisterNewPatient;
