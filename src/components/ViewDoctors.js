import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function ViewDoctors({ contract }) {
  const [doctors, setDoctors] = useState([]);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();


  const handleClick = async () => {
    try{
      const list = await contract.viewListOfDoctors();
      setDoctors(list);
      setToggle(!toggle);
     
     
    }catch(error){
      console.log(error);
    }
   
  };
  const handleSubmit = async => {
    try{
      navigate("/Login");
      
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <div>
        <button
          className="bg-[#008753] hover:bg-[#FFCBCB] text-white font-bold py-1 px-1 rounded-full"
          onClick={handleClick}
        >
          {!toggle ? "View List of Doctors" : "Hide List"}
          
        </button>
      </div>
      {!toggle
        ? null
        : doctors.map((doctor) => {
            return (
              <div key={doctor.doctorID.toNumber()}>
                {doctor.doctorID.toNumber()}: {doctor.doctorName}
              </div>
            );
          })}
  <div>
  <button className=" py-[30px] bg-[#008753]" onClick={handleSubmit} >
        Return home
        </button>
  </div>
        
    </div>
  );
}
export default ViewDoctors;
