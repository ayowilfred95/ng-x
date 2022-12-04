import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ViewMeds({ contract }) {
  const [meds, setMeds] = useState([]);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    try{
      const list = await contract.viewListofMedications();
      setMeds(list);
      setToggle(!toggle);
    }catch(error){
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    navigate("/Login");
  }
  return (
    <div>
      <div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded-full"
          onClick={handleClick}
        >
          {!toggle ? "View List of Medications" : "Hide List"}
        </button>
      </div>
      {!toggle
        ? null
        : meds.map((med) => {
            return (
              <div key={med.medicationId.toNumber()} className="border">
                <div> Medication ID Number: {med.medicationId.toNumber()}</div>
                <div> Medication Name: {med.medicationName} </div>
                <div> Dosage: {med.dosage} </div>
                <div>Date:{med.date}</div>
                <div>Price: ${med.price.toNumber()} </div>
              </div>
            );
          })}
          <div className="  py-[30px] ">
            <button onClick={handleSubmit} className=" bg-[#008753] hover:bg-[#FFCBCB] " >Return home</button>
          </div>
    </div>
  );
}
export default ViewMeds;
