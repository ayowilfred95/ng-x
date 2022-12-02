import React, { useState } from "react";

function ViewDeps({ contract }) {
  const [deps, setDeps] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleClick = async () => {
    const list = await contract.viewListofDependencies();
    setDeps(list);
    setToggle(!toggle);
  };
  return (
    <div>
      <div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded-full"
          onClick={handleClick}
        >
          {!toggle ? "View List of Dependencies" : "Hide List"}
        </button>
      </div>
      {!toggle
        ? null
        : deps.map((dep) => {
            return (
              <div key={dep.dependencyId.toNumber()} className="border">
                <div> Dependency ID Number: {dep.dependencyId.toNumber()}</div>
                <div> Dependency Name: {dep.dependencyName} </div>
                <div> Relationship: {dep.relationship} </div>
                <div>Address: {dep.address}</div>
                <div>Contact Address:{dep.contact.toNumber()} </div>
              </div>
            );
          })}
    </div>
  );
}
export default ViewDeps;
