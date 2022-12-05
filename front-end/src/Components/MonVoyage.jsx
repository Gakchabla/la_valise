import React from "react";

import Formulaire from "../Components/Formulaire";

export default function MonVoyage({
  setVoyageInfos,
  voyageInfos,
  setTravelTime,
  setIsOpen,
  isOpen,
}) {
  return (
    <div className="min-h-fit h-screen flex-col justify-center bg-voyage bg-plane bg-contain bg-no-repeat bg-right">
      <div className="flex justify-between items-center h-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="w-10 h-10 ml-3 cursor-pointer"
          onClick={() => setIsOpen("accueil")}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </div>
      <div className="w-full text-center pt-6 pr-10">
        <h1 className="text-slate-100 self-center font-leagueSpartan text-4xl">
          Mon Voyage :
        </h1>
      </div>
      <div className="h-3/4 m-8">
        <Formulaire
          setVoyageInfos={setVoyageInfos}
          voyageInfos={voyageInfos}
          setTravelTime={setTravelTime}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}
