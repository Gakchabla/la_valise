import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import MaValise from "../Pages/MaValise";
import MonVoyage from "../Pages/MonVoyage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes({
  setVoyageInfos,
  voyageInfos,
  travelTime,
  setTravelTime,
}) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        <Route
          path="/monvoyage"
          element={
            <MonVoyage
              setVoyageInfos={setVoyageInfos}
              voyageInfos={voyageInfos}
              setTravelTime={setTravelTime}
            />
          }
        />

        <Route
          path="/mavalise"
          element={
            <MaValise voyageInfos={voyageInfos} travelTime={travelTime} />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
