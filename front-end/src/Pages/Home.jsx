import React, { useEffect } from "react";

function Home({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("La Valise"));
  useEffect(() => setFooterOpen(true));
  return <div className="h-[40vh]"></div>;
}

export default Home;
