import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer({ footerOpen }) {
  return (
    <footer
      className={`shadow-footer bg-primary absolute bottom-0 items-center  w-screen flex justify-center ease-out duration-300 ${
        footerOpen ? "h-[35vh]" : "h-20"
      } `}
    >
      {footerOpen ? (
        <Link to="/monvoyage">
          <button
            type="button"
            className=" bg-amber-600 h-16 w-52 rounded-lg border shadow-md shadow-black text-xl"
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
