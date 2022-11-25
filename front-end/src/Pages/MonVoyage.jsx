import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Components/IconSVG";
import { motion } from "framer-motion";

import Formulaire from "../Components/Formulaire";

export default function MonVoyage({
  setVoyageInfos,
  voyageInfos,
  setTravelTime,
}) {
  return (
    <motion.div
      className="min-h-fit h-screen flex-col justify-center bg-bg"
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: -window.innerHeight, transition: { duration: 0.3 } }}
    >
      <div className="flex justify-between items-center h-24">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 ml-3">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </Link>
        <div className="mr-5">
          <Icon />
        </div>
      </div>
      <div className="w-full text-center pt-6 pr-10">
        <h1 className="text-slate-100 self-center font-leagueSpartan text-4xl">
          Mon Voyage :
        </h1>
      </div>
      <div className="h-3/4 m-8">
        <Formulaire
          setVoyageInfos={setVoyageInfos}
          voyageInfos={voyageInfos}
          setTravelTime={setTravelTime}
        />
      </div>
    </motion.div>
  );
}
