import React from "react";
import { useNavigate } from 'react-router-dom';

function ApproveDoctor({ contract }) {

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const { id } = e.target.elements;

    await contract.approveDoctor(id.value);
    alert("Doctor Approved Successfully!");
    navigate("/Login");
    }catch(error){
      console.log(error);
      alert("Doctor does not exist");
      navigate("/Login");
    }
    
  };

  const handleClick = async()=>{
    navigate("/Login");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="h-18 w-68 border-4 rounded border-gray-400">
          <label>Enter Doctor ID Number:</label>
          <div>
            <input
              className="w-20 border 2 border-rose-500 bg-slate-300"
              type="number"
              id="id"
              required
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"
            type="submit"
          >
            Approve Doctor
          </button>
        </div>
      </form>
      <div>
        <button className=" py-[30px] bg-[#008753] hover:bg-[#FFCBCB]" onClick={handleClick}>Return</button>
      </div>
    </div>
  );
}
export default ApproveDoctor;
