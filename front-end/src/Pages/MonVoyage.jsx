import React, { useEffect } from "react";
import Footer from "../Components/Footer";

export default function MonVoyage({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("Mon Voyage"));
  useEffect(() => {
    setFooterOpen(false);
  });

export default function MonVoyage() {
  return (
    <div className="h-screen flex-col">
      <Formulaire />
    </div>
  );
}
