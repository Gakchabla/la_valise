import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckListResult from "../Components/CheckListResult";
import CheckListResultVetements from "../Components/CheckListResultVetements";

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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
    />
  </svg>;
  return (
    <div className="bg-primary min-h-screen h-fit">
      <Link to="/monvoyage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </Link>
      <legend className="text-3xl mt-5 pl-2 font-medium self-center text-center text-white">
        {voyageInfos.voyageur
          ? `Salut ${voyageInfos.voyageur}, voilà ta Valise 🧳`
          : `Salut Voyageur, voilà ta Valise 🧳`}
      </legend>
      <legend className="pt-5 pl-2">Vêtements:</legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "vetement")
          .concat(
            nonEssentiels.filter((item) => item.categorie === "vetement")
          )}
      />

      <legend className="pt-5 pl-2">Produits d'hygiène:</legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "hygiene")
          .concat(nonEssentiels.filter((item) => item.categorie === "hygiene"))}
      />

      <legend className="pt-5 pl-2">Autres:</legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "autre")
          .concat(nonEssentiels.filter((item) => item.categorie === "autre"))}
      />
    </div>
  );
}
