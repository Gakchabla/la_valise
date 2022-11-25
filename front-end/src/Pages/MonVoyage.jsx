import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Formulaire from "../Components/Formulaire";

export default function MonVoyage({
  setPageTitle,
  setFooterOpen,
  setVoyageInfos,
  voyageInfos,
  setTravelTime,
}) {
  useEffect(() => setPageTitle("Mon Voyage"));
  useEffect(() => {
    setFooterOpen(false);
  });

  return (
    <div className="h-screen flex-col">
      <Link to="/">
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

      <div className="h-full flex flex-col justify-end">
        <Formulaire
          setVoyageInfos={setVoyageInfos}
          voyageInfos={voyageInfos}
          setTravelTime={setTravelTime}
        />
      </div>
    </div>
  );
}
