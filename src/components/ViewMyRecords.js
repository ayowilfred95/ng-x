import React, { useState } from "react";
import PatientResults from "./PatientResults";
import { useNavigate } from 'react-router-dom';


function ViewMyRecords({ contract }) {
  
  
  const [toggle, setToggle] = useState(false);

  const [obj, setObj] = useState({});
  const [id, setId] = useState(undefined);
  const [prescriptions, setPrescriptions] = useState([]);
  const [conditions, setConditions] = useState([]);
  const navigate = useNavigate();

  const handleClick = async () => {
    try{
      const data = await contract.viewMyRecords();
    const num = data.patientID;
    setPrescriptions(data.prescriptions);
    setConditions(data.conditions);
    setId(num.toNumber());
    setObj(data);
    setToggle(!toggle);
    }catch(error){
      console.log(error);
      alert("Not a patient yet! please register to view your records");
    }
    
   };
  const handleSubmit = async () => {
    navigate("/Login");
  }

  return (
    <div>
      <div>
        <button
          className="bg-[#008753] hover:bg-[#FFCBCB] text-white font-bold py-1 px-1 rounded-full"
          onClick={() => {
            handleClick();
          }}
        >
          {!toggle ? "View My Medical Records" : "Hide info"}
        </button>
      </div>

      {toggle ? (
        <PatientResults
          obj={obj}
          id={id}
          prescriptions={prescriptions}
          conditions={conditions}
        />
      ) : null}
      <div>
        <button onClick={handleSubmit} className=" bg-[#008753] hover:bg-[#FFCBCB] " >Return home</button>
      </div>
    </div>
  );
}

export default ViewMyRecords;
