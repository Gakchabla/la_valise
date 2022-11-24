import React, { useEffect, useState } from "react";

function Formulaire() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        console.log(destinations);
      });
  }, []);

  return (
    <div className="flex flex-col border rounded-sm border-black">
      <form action="" method="post">
        <div className="flex">
          <label className="p-4" htmlFor="Name">
            Name :
          </label>
          <input
            className="self-center rounded-md shadow-sm h-full border border-black"
            type="text"
          />
        </div>
        <div className="flex">
          <label className="p-4" htmlFor="dateNaissance">
            Date de départ :
          </label>
          <input className="border border-black rounded-md h-10" type="date" />
        </div>
        <div className="flex">
          <label className="p-4" htmlFor="dateNaissance">
            Date de de retour :
          </label>
          <input className="border border-black rounded-md h-10" type="date" />
        </div>
        <div className="flex items-center">
          <label className="p-4" htmlFor="Name">
            Gender :
          </label>
          <select className="border border-black rounded-md h-10" name="gender">
            <option value="value">Male</option>
            <option value="value">Female</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="p-4" htmlFor="Name">
            Destination :
          </label>
          <select
            value={selectedDestination}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedDestination(selected);
            }}
            className="border border-black rounded-md h-10"
            name="destination">
            {destinations.map((el) => {
              return <option value="value">{el.Destination}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
