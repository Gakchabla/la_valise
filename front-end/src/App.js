import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Home from "./Pages/Home";

function App() {
  const [voyageInfos, setVoyageInfos] = useState({});
  const [travelTime, setTravelTime] = useState(0);

  return (
    <div className="App bg-bg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
