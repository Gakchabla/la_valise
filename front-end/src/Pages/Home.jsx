import React from "react";
import CheckListResult from "../Components/CheckListResult";

function Home() {
  return (
    <div>
      <h1 className="flex justify-center text-2xl text-red-400">
        Welcome to the Wild Hackathon !
      </h1>
      <CheckListResult />
      <h2>Branche dev</h2>
    </div>
  );
}

export default Home;
