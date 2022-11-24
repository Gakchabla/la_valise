import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ footerOpen }) {
  return (
    <footer
      className={`shadow-footer bg-gradient-to-b from-primary to-emerald-900 absolute bottom-0 items-center  w-screen flex justify-center ease-out duration-300 ${
        footerOpen ? "h-[35vh]" : "h-20"
      } `}
    >
      {footerOpen ? (
        <Link to="/monvoyage">
          <button
            type="button"
            className=" bg-secondary h-16 w-52 rounded-lg border  border-black shadow-md shadow-black text-xl"
          >
            Choisir mon voyage!
          </button>
        </Link>
      ) : (
        ""
      )}
    </footer>
  );
}
