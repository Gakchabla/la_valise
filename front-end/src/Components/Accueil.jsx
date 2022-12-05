import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Accueil({ setIsOpen }) {
  const handleClick = () => {
    setIsOpen("voyage");
    console.log("toto");
  };
  return (
    <div className="h-screen bg-mobile bg-contain bg-no-repeat bg-bottom justify-between flex flex-col transition-transform ease-out duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.0"
        stroke="currentColor"
        className="w-28 h-28 absolute pb-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h19M3.75 12h13m-12.5 5.25h10"
        />
      </svg>

      <div className="h-1/4 w-full flex flex-col items-start justify-center">
        <h1 className="text-white font-leagueSpartan text-6xl mt-4 ml-6">
          La Valise
        </h1>
      </div>

      <div className="w-full self-center h-20  mb-16 flex flex-wrap justify-center">
        <button
          type="button"
          onClick={() => handleClick()}
          className="w-[75vw] pt-2 font-leagueSpartan bg-button rounded-3xl text-slate-100 text-6xl"
        >
          Go !
        </button>
      </div>
    </div>
  );
}

export default Accueil;
