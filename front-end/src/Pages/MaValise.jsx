import React, { useEffect } from "react";
import { useState } from "react";
import CheckListResult from "../Components/CheckListResult";

export default function MaValise({
  setPageTitle,
  setFooterOpen,
  voyageInfos,
  travelTime,
}) {
  const [essentiels, setEssentiels] = useState([]);
  const [nonEssentiels, setNonEssentiels] = useState([]);
  useEffect(() => setPageTitle("Ma Valise"));
  useEffect(() => setFooterOpen(false));

  useEffect(() => {
    fetch("http://localhost:5020/api/items/essentiels")
      .then((results) => results.json())
      .then((datas) => {
        setEssentiels(datas);
      });
  }, []);
  const getNonEssentiels = () => {
    if (voyageInfos.climat) {
      fetch(
        `http://localhost:5020/api/items/filter?temperature=${
          voyageInfos.climat
        }${voyageInfos.meteo ? `&meteo=${voyageInfos.meteo}` : ""}${
          voyageInfos.typeVoyage
            ? `&backpackouchill=${voyageInfos.typeVoyage}`
            : ""
        }${voyageInfos.typeLieu === "montagne" ? `&montagneux=1` : ""}${
          voyageInfos.typeLieu === "rural" ? `&urbainourural=rural` : ""
        }${voyageInfos.typeLieu === "urbain" ? `&urbainourural=urbain` : ""}${
          voyageInfos.typeLieu === "plage" ? `&plage=1` : ""
        }${voyageInfos.typeLieu === "desert" ? `&desert=1` : ""}`
      )
        .then((results) => results.json())
        .then((result) => setNonEssentiels(result));
    }
  };
  useEffect(() => {
    if (voyageInfos) {
      getNonEssentiels();
    }
  }, []);
  return (
    <div>
      <legend className="text-2xl font-medium self-center text-gray-900">
        🧳 Votre Valise:
      </legend>
      <legend>Produits d'hygiène:</legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "hygiene")
          .concat(nonEssentiels.filter((item) => item.categorie === "hygiene"))}
      />
      <legend>Vêtements:</legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "vetement")
          .concat(
            nonEssentiels.filter((item) => item.categorie === "vetement")
          )}
      />
      <legend>Autres:</legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "autre")
          .concat(nonEssentiels.filter((item) => item.categorie === "autre"))}
      />
    </div>
  );
}
