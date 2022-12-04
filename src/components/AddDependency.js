import React from "react";
import { useNavigate } from 'react-router-dom';

function AddNewDependency({ contract }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { IDnumber, dependency_name, dependency_relationship, dependency_address, contact_nos } = e.target.elements;
    let details = {
      number: IDnumber.value,
      name: dependency_name.value,
      relationship: dependency_relationship.value,
      address: dependency_address.value,
      contact: contact_nos.value,
    };
    const tx = await contract.addMedication(
      details.number,
      details.name,
      details.relationship,
      details.address,
      details.contact
    );
    await tx.wait();
    alert("New Dependency added");
    navigate("/Login");
    } catch (error) {
      console.log(error);
      alert("Dependency already added");
      navigate("/Login");
    }
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full border-4 p-2 mb-4 rounded border-gray-400">
        <div className="text-gray-600 font-bold text-lg mb-2">
          Add New Dependency:{" "}
        </div>

        <div className="text-gray-600  text-md mb-2">
          <label>Dependency ID Number: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="IDnumber"
            required
          />
        </div>
        <div className="text-gray-600  text-md mb-2">
          <label>Dependency Name: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="dependency_name"
            required
          />
        </div>
        <div className="text-gray-600  text-md mb-2">
          <label>Relationship: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="dependency_relationship"
            required
          />
        </div>
        <div className="text-gray-600  text-md mb-2">
          <label>Address: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="dependency_address"
            required
          />
        </div>
        <div className="text-gray-600  text-md mb-2">
          <label>contact: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="contact_nos"
            required
          />
        </div>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddNewDependency;
