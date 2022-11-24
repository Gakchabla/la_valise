import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";

export default function MaValise({ setPageTitle, setFooterOpen }) {
  const [contenuValise, setContenuValise] = useState([]);
  useEffect(() => setPageTitle("Ma Valise"));
  useEffect(() => setFooterOpen(false));

  useEffect(() => {
    fetch("http://localhost:5001/api/items/essentiels")
      .then((results) => results.json())
      .then((datas) => {
        setContenuValise(datas);
      });
  }, []);

  return (
    <div>
      <ul>
        Produits d'Hygiène:
        {contenuValise
          .filter((item) => item.categorie === "hygiene")
          .map((item) => (
            <li key={item.id}>{item.itemname}</li>
          ))}
      </ul>
      <br />
      <ul>
        Vêtements:
        {contenuValise
          .filter((item) => item.categorie === "vetement")
          .map((item) => (
            <li key={item.id}>{item.itemname}</li>
          ))}
      </ul>
      <br />
      <ul>
        Autre:
        {contenuValise
          .filter((item) => item.categorie === "autre")
          .map((item) => (
            <li key={item.id}>{item.itemname}</li>
          ))}
      </ul>
    </div>
  );
}
