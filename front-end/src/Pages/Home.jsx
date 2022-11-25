import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("La Valise"));
  return (
    <div className="h-screen bg-hero bg-contain justify-between flex flex-col">
      <div className="h-1/4 w-full flex flex-col items-start justify-center">
        <h1 className="text-white font-leagueSpartan text-6xl mt-4 ml-6">
          La Valise
        </h1>
      </div>

      <div className="w-full self-center h-20  mb-16 flex flex-wrap justify-center">
        <Link to="/monvoyage">
          <button
            type="button"
            className="w-[75vw] font-leagueSpartan bg-button rounded-3xl text-slate-100 text-6xl">
            Go !
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
