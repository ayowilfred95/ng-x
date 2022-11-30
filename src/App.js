import './App.css';
import Navbar from './components/Navbar.js';
import {Routes, Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import NFTPage from './components/NFTpage';
import RegisterNewPatient from "./components/RegisterNewPatient";
import RegisterNewDoctor from "./components/RegisterNewDoctor";
import ViewMyRecords from "./components/ViewMyRecords";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/nftPage" element={<NFTPage />}/> 
        <Route path="/registerNewPatient" element={<RegisterNewPatient />}/>
       < Route path="/registerNewDoctor" element={<RegisterNewDoctor />}/> 
       < Route path="/ViewMyRecords" element={<ViewMyRecords />}/> 
      </Routes>
    </div>
  );
}

export default App;
