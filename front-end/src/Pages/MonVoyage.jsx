import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Formulaire from "../Components/Formulaire";

export default function MonVoyage({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("Mon Voyage"));
  useEffect(() => {
    setFooterOpen(false);
  });

  return (
    <div className="h-screen flex-col">
      <Formulaire />
    </div>
  );
}
