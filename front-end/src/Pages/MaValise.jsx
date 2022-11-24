import React, { useEffect } from "react";
import Footer from "../Components/Footer";

export default function MaValise({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("Ma Valise"), []);
  useEffect(() => setFooterOpen(false));

  return (
    <div>
      LaValise
      <Footer />
    </div>
  );
}
