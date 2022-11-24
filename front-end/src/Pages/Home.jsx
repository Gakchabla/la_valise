import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <div className="w-full">
          <img
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
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="h-1/4 flex items-center justify-center">
        <button className="border rounded-md p-2">Je fais ma valise</button>
      </div>
    </div>
  );
}

export default Home;
