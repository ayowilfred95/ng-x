import React from "react";
import { ethers } from "ethers";
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import WelcomePage from "./components/WelcomePage";
import Navbar from "./components/Navbar";


function App() {
 

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/Login" element={<Login />}/> 
     
    </Routes>
  </div>
  );
}

export default App;
