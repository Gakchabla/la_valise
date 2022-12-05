import React, { useEffect } from "react";
import { useState } from "react";
import CheckListResult from "./CheckListResult";

import Loader from "./Loader";

export default function MaValise({ voyageInfos, travelTime, setIsOpen }) {
  const [essentiels, setEssentiels] = useState([]);
  const [nonEssentiels, setNonEssentiels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  useEffect(() => {
    fetch("http://localhost:5020/api/essentiels")
      .then((results) => results.json())
      .then((datas) => {
        setEssentiels(datas);
      });
  }, []);
  const getNonEssentiels = () => {
    if (
      voyageInfos.climat ||
      voyageInfos.mete ||
      voyageInfos.typeVoyage ||
      voyageInfos.typeLieu
    )
      fetch(
        `http://localhost:5020/api/items/filter?${
          voyageInfos.climat ? voyageInfos.climat + "&" : ""
        }${
          voyageInfos.meteo.value === "" ||
          voyageInfos.meteo === "inc" ||
          voyageInfos.meteo === "deux"
            ? ""
            : voyageInfos.meteo + "&"
        }${
          voyageInfos.typeVoyage ? voyageInfos.typeVoyage + "&" : "backpack=0"
        }${voyageInfos.typeLieu ? voyageInfos.typeLieu + "&" : ""}`
      )
        .then((results) => results.json())
        .then((result) => {
          setNonEssentiels(result);
        });
  };
  useEffect(() => {
    if (voyageInfos) {
      getNonEssentiels();
    }
  }, [voyageInfos]);

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-valise min-h-screen h-fit bg-clouds bg-no-repeat bg-top bg-contain">
      <div className="flex justify-between items-center h-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="w-10 h-10 ml-3 cursor-pointer"
          onClick={() => setIsOpen("voyage")}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </div>
      <legend className="text-3xl mt-5 pl-2 font-medium self-center text-center font-leagueSpartan text-slate-100">
        {voyageInfos.voyageur ? `${voyageInfos.voyageur},` : `Voyageur,`}
      </legend>
      <legend className="text-3xl pl-2 font-medium self-center text-center font-leagueSpartan text-button">
        voilà ta Valise
      </legend>
      <legend className="text-xl mt-5 pl-2 font-medium self-center text-center font-leagueSpartan text-slate-100">
        Prévois pour
      </legend>
      <legend className="text-xl pl-2 font-semibold self-center text-center font-leagueSpartan text-button">
        {travelTime ? `${travelTime} jours:` : "la durée de ton voyage:"}
      </legend>

      <legend className="pt-5 w-full text-center pl-2 text-2xl font-leagueSpartan text-slate-100">
        Vêtements :
      </legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.type === "vetement")
          .concat(nonEssentiels.filter((item) => item.type === "vetement"))}
      />

      <legend className="pt-5 pl-2 w-full text-center text-2xl font-leagueSpartan text-slate-100">
        Produits d'hygiène :
      </legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.type === "hygiene")
          .concat(nonEssentiels.filter((item) => item.type === "hygiene"))}
      />

      <legend className="pt-5 pl-2 w-full text-center text-2xl font-leagueSpartan text-slate-100">
        Autres :
      </legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.type === "autre")
          .concat(nonEssentiels.filter((item) => item.type === "autre"))}
      />
    </div>
  );
}
