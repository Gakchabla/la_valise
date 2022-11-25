import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Formulaire from "../Components/Formulaire";

export default function MonVoyage({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("Mon Voyage"));
  useEffect(() => {
    setFooterOpen(false);
  });

  return (
    <div className="h-screen flex-col justify-center bg-bg">
      <div className="flex pt-5 pl-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <div className="w-full text-center pt-6 pr-10">
          <h1 className="text-slate-100 self-center text-4xl">Mon Voyage :</h1>
        </div>
      </div>
      <div className="h-3/4 m-8">
        <Formulaire />
      </div>
    </div>
  );
}
