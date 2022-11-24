import React, { useEffect } from "react";
import Footer from "../Components/Footer";

export default function MonVoyage({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("Mon Voyage"));
  useEffect(() => {
    setFooterOpen(false);
  });

  return <div>MonVoyage</div>;
}
