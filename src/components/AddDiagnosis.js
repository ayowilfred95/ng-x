import React from "react";
import { useNavigate } from 'react-router-dom';

function AddDiagnosis({ contract }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { patientId, condition } = e.target.elements;

      const tx = await contract.addCondition(condition.value, patientId.value);
      await tx.wait();
      alert("Doctor has added a new diagnosis!");
      navigate("/Login");
    }catch(error){
      console.log(error);
      alert("Diagnosis already added");
      navigate("/Login");
    }

  };

  const handleClick = async () => {

    navigate("/Login");
  }

  return (
    <div> 

<form onSubmit={handleSubmit}>
      <div className="w-30 border-4 p-2 mb-4 rounded border-gray-400">
        <div className="text-gray-600 font-bold text-md mb-2">
          Add Diagnosis
        </div>
        <div className="text-gray-600  text-md mb-2">
          <label>Enter Patient ID: </label>

          <input
            className="w-30 border 2 border-rose-500 bg-slate-300"
            type="text"
            id="patientId"
            required
          />
        </div>

        <div className="text-gray-600  text-md mb-2">
          <label>Enter Diagnosis: </label>
          <input
            className="w-30 border 2 border-rose-500 bg-slate-300"
            type="text"
            id="condition"
            required
          />
        </div>

        <button
          className="bg-[#008753] hover:bg-[#FFCBCB] text-white font-bold py-1 px-3 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    <div>
      <button className=" bg-[#008753] hover:bg-[#FFCBCB]" onClick={handleClick}>Return</button>
    </div>
    </div>
   
  );
}
export default AddDiagnosis;
