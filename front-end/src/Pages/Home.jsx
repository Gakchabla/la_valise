import React, { useEffect } from "react";

function Home({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("La Valise"));
  useEffect(() => setFooterOpen(true));

  return <div></div>;
}

export default Home;
