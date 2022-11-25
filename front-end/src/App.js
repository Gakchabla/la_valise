import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MaValise from "./Pages/MaValise";
import MonVoyage from "./Pages/MonVoyage";
import NotFound from "./Components/NotFound";
import Loader from "./Components/Loader";

function App() {
  const [pageTitle, setPageTitle] = useState("La Valise");
  const [voyageInfos, setVoyageInfos] = useState({});
  const [travelTime, setTravelTime] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setPageTitle={setPageTitle} />} />

        <Route
          path="/monvoyage"
          element={
            <MonVoyage
              setPageTitle={setPageTitle}
              setVoyageInfos={setVoyageInfos}
              voyageInfos={voyageInfos}
              setTravelTime={setTravelTime}
            />
          }
        />

        <Route
          path="/mavalise"
          element={
            <MaValise
              setPageTitle={setPageTitle}
              voyageInfos={voyageInfos}
              travelTime={travelTime}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Loader />
    </div>
  );
}

export default App;
