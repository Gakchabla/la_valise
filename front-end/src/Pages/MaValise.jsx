import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckListResult from "../Components/CheckListResult";
import Icon from "../Components/IconSVG";
import Loader from "../Components/Loader";

export default function MaValise({ voyageInfos, travelTime }) {
  const [essentiels, setEssentiels] = useState([]);
  const [nonEssentiels, setNonEssentiels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

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

  return loading ? (
    <Loader />
  ) : (
    <div className="bg-primary min-h-screen h-fit">
      <div className="flex justify-between items-center h-24">
        <Link to="/monvoyage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 ml-3">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </Link>
        <div className="mr-5">
          <Icon />
        </div>
      </div>
      <legend className="text-3xl mt-5 pl-2 font-medium self-center text-center font-leagueSpartan text-white">
        {voyageInfos.voyageur
          ? `${voyageInfos.voyageur}, voilà ta Valise 🧳`
          : `Voyageur, voilà ta Valise 🧳`}
      </legend>
      <legend className="text-xl mt-5 pl-2 font-medium self-center text-center font-leagueSpartan text-white">
        {travelTime
          ? `Prévois pour ${travelTime} jours:`
          : "Prévois pour la durée de ton voyage:"}
      </legend>
      <legend className="pt-5 w-full text-center pl-2 text-xl font-leagueSpartan text-slate-100">
        Vêtements:
      </legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "vetement")
          .concat(
            nonEssentiels.filter((item) => item.categorie === "vetement")
          )}
      />

      <legend className="pt-5 pl-2 w-full text-center text-xl font-leagueSpartan text-slate-100">
        Produits d'hygiène:
      </legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "hygiene")
          .concat(nonEssentiels.filter((item) => item.categorie === "hygiene"))}
      />

      <legend className="pt-5 pl-2 w-full text-center text-xl font-leagueSpartan text-slate-100">
        Autres:
      </legend>
      <CheckListResult
        items={essentiels
          .filter((item) => item.categorie === "autre")
          .concat(nonEssentiels.filter((item) => item.categorie === "autre"))}
      />
    </div>
  );
}
