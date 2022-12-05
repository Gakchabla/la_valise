import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import travel from "../Assets/travel 2.json";
import Accueil from "../Components/Accueil";
import MonVoyage from "../Components/MonVoyage";
import MaValise from "../Components/MaValise";
import MaValiseDesktop from "../Components/MaValiseDesktop";
import icone1 from "../Assets/icone 11.png";
import icone2 from "../Assets/icone 2.png";
import icone3 from "../Assets/icone 3.png";
import icone4 from "../Assets/icone 4.png";

function Home() {
  const [isOpen, setIsOpen] = useState("accueil");
  const [voyageInfos, setVoyageInfos] = useState("");
  const [travelTime, setTravelTime] = useState("");

  useEffect(() => console.log(isOpen), [isOpen]);
  return (
    <div className="h-screen w-screen">
      <div className="md:hidden lg:hidden">
        <div
          className={
            isOpen === "accueil"
              ? "translate-x-0 "
              : "translate-x-[-100vw] ease-in duration-200"
          }
        >
          {isOpen === "accueil" ? <Accueil setIsOpen={setIsOpen} /> : null}
        </div>
        <div
          className={
            isOpen === "voyage"
              ? "translate-x-0 ease-in duration-200 absolute top-0 w-screen "
              : " delay-200 translate-x-[100vw] absolute top-0 "
          }
        >
          {isOpen === "voyage" ? (
            <MonVoyage
              setIsOpen={setIsOpen}
              setVoyageInfos={setVoyageInfos}
              voyageInfos={voyageInfos}
              setTravelTime={setTravelTime}
              isOpen={isOpen}
            />
          ) : null}
        </div>
        <div
          className={
            isOpen === "valise"
              ? " absolute top-0 w-screen"
              : " absolute top-0 "
          }
        >
          {isOpen === "valise" ? (
            <MaValise
              setIsOpen={setIsOpen}
              voyageInfos={voyageInfos}
              setVoyageInfos={setVoyageInfos}
              travelTime={travelTime}
            />
          ) : null}
        </div>
      </div>
      <div className="hidden md:flex lg:flex bg-bg">
        <div className="lg:w-[33vw] md:w-[33vw] drop-shadow-2xl border-slate-800 z-30 bg-bg bg-others bg-auto bg-no-repeat bg-bottom h-screen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.0"
            stroke="currentColor"
            className="w-28 h-28  pb-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h19M3.75 12h13m-12.5 5.25h10"
            />
          </svg>
          <div className="h-1/4 lg:h-fit w-full flex flex-col items-start justify-start ">
            <h1 className="text-slate-100 font-leagueSpartan font-semibold text-7xl mt-3 m-6 mb-2">
              La Valise
            </h1>
            <h2 className="text-3xl text-slate-100 font-leagueSpartan m-6 mb-0 mt-0">
              Peur d'oublier quelque chose ?
            </h2>

            <div className="self-center">
              <div className="font-leagueSpartan text-3xl text-slate-100 mt-10 flex items-center">
                <img src={icone1} alt="icone du 1" className="mr-2" />
                <p className="h-full">Définissez votre voyage</p>
              </div>
              <div className="font-leagueSpartan text-3xl text-slate-100 mt-3 flex items-center">
                <img src={icone2} alt="icone du 2" className="mr-2" />
                <p className="h-full">Recevez votre liste</p>
              </div>
              <div className="font-leagueSpartan text-3xl text-slate-100 mt-3 flex items-center">
                <img src={icone3} alt="icone du 3" className="mr-2" />
                <p className="h-full">Commencez à faire vos bagages</p>
              </div>
              <div className="font-leagueSpartan text-3xl text-slate-100 mt-3 flex items-center">
                <img src={icone4} alt="icone du 4" className="mr-2" />
                <p className="h-full">Profitez de votre voyage bien équipé!</p>
              </div>
            </div>
            <button
              className="px-4 pt-1 mt-5 mr-3 h-20 self-center font-leagueSpartan font-semibold rounded-3xl text-slate-100 text-4xl bg-button "
              onClick={() => setIsOpen("voyage")}
            >
              C'est parti!
            </button>
          </div>
        </div>
        {isOpen === "voyage" || isOpen === "valise" ? (
          <div
            className={`hidden md:block lg:block lg:w-[34vw] ${
              isOpen === "voyage" ? "drop-shadow-fond" : "drop-shadow-2xl"
            } border-slate-100 translate-x-0 ease-linear duration-200 z-20`}
          >
            <MonVoyage
              setIsOpen={setIsOpen}
              setVoyageInfos={setVoyageInfos}
              voyageInfos={voyageInfos}
              setTravelTime={setTravelTime}
              isOpen={isOpen}
            />
          </div>
        ) : (
          <div className="-translate-x-[33vw]"></div>
        )}
        {isOpen === "valise" ? (
          <div className="hidden md:flex lg:flex lg:w-[33vw] overflow-scroll h-screen w-screen translate-x-0 ease-linear duration-200 z-10">
            <MaValiseDesktop
              setIsOpen={setIsOpen}
              voyageInfos={voyageInfos}
              setVoyageInfos={setVoyageInfos}
              travelTime={travelTime}
            />
          </div>
        ) : (
          <div className="-translate-x-[33vw]"></div>
        )}
        <div className="fixed w-[67vw] right-0 bottom-0">
          <Lottie animationData={travel} />
        </div>
      </div>
    </div>
  );
}

export default Home;
