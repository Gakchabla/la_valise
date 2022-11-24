import React, { useEffect } from "react";

function Home({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("La Valise"));
  useEffect(() => setFooterOpen(true));
  return (
    <div className="h-[40vh]">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <div className="w-full">
          <img
            className="h-[50vh] w-screen"
            src="https://img.freepik.com/photos-gratuite/voyage-aventure-bagages_23-2149153255.jpg?w=2000"
            alt="imgCarousel"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Home;
