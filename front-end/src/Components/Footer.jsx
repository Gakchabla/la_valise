import React from "react";
import { Link } from "react-router-dom";
import background from "../Assets/background.png";

export default function Footer({ footerOpen }) {
  return (
    <div>
      <img
        src={background}
        alt="Countryside background"
        classname=" absolute z-0 bottom-11"
      />

      <footer
        className={`shadow-footer bg-primary fixed bottom-0 items-center  w-screen flex justify-center ease-out duration-300 ${
          footerOpen ? "h-[25vh]" : "h-20"
        } `}
      >
        {footerOpen ? (
          <Link to="/monvoyage">
            <button
              type="button"
              className=" bg-secondary h-20 w-56 rounded-3xl opacity-80 border-black text-xl"
            >
              Choisir mon voyage!
            </button>
          </Link>
        ) : (
          ""
        )}
      </footer>
    </div>
  );
}
