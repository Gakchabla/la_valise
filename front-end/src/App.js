import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import MaValise from "./Pages/MaValise";
import MonVoyage from "./Pages/MonVoyage";

function App() {
  return (
    <div className="App">
      <Header />
     <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/monvoyage" element={ <MonVoyage />} />
      <Route path="/mavalise" element={ <MaValise />} />
     </Routes>
    </div>
  );
}

export default App;
