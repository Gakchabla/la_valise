import React, { useEffect } from "react";
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
      <Formulaire
        setVoyageInfos={setVoyageInfos}
        voyageInfos={voyageInfos}
        setTravelTime={setTravelTime}
      />
    </div>
  );
}
