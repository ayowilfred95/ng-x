import React from "react";
import { useNavigate } from 'react-router-dom';

function AddMedication({ contract }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { IDnumber, med_name, expiration_date, dosage, price } = e.target.elements;
      let details = {
        number: IDnumber.value,
        name: med_name.value,
        date: expiration_date.value,
        dosage: dosage.value,
        price: price.value,
      };
      const tx = await contract.addMedication(
        details.number,
        details.name,
        details.date,
        details.dosage,
        details.price
      );
      await tx.wait();
      alert("New Medication added");
      navigate("/Login");
    } catch (error) {
      console.log(error);
      alert('medication already added');
      
    }
   
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full border-4 p-2 mb-4 rounded border-gray-400">
        <div className="text-gray-600 font-bold text-lg mb-2">
          Add New Medication:{" "}
        </div>

        <div className="text-gray-600  text-md mb-2">
          <label>Medication ID Number: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="IDnumber"
            required
          />
        </div>
        <div className="text-gray-600  text-md mb-2">
          <label>Medication Name: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="med_name"
            required
          />
        </div>
        <div className="text-gray-600  text-md mb-2">
          <label>Dosage: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="dosage"
            required
          />
        </div>
        <div className="text-gray-600  text-md mb-2">
          <label>Expiration Date: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="expiration_date"
            required
            placeholder ="february"
          />
          </div>
        <div className="text-gray-600  text-md mb-2">
          <label>Price: </label>
          <input
            className="border 2 border-rose-500 bg-slate-300"
            type="text"
            id="price"
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

export default AddMedication;
