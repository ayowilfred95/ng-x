import React from "react";
import { useNavigate } from 'react-router-dom';

function UpdatePatientAge({ contract }) {
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { age } = e.target.elements;
      await contract.updateMyAge(age.value);
      alert("Patient Age successfully updated!");
      navigate("/Login");
    }catch(error){
      console.log(error);
      alert("Patient is not register! Please register as a new patient to enable age update");
    }
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="h-18 w-49
         border-4 rounded border-gray-400"
        >
          <label>Update Patient Age: </label>
          <div>
            <input
              className="w-20 border 2 border-rose-500 bg-slate-300"
              type="number"
              id="age"
              required
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UpdatePatientAge;
