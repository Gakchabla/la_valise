import { React, useState } from "react";
import AnimatedRoutes from "./Components/AnimatedRoutes";


function App() {
  const [voyageInfos, setVoyageInfos] = useState({});
  const [travelTime, setTravelTime] = useState(0);

  return (
    <div className="App bg-bg">
    <AnimatedRoutes voyageInfos={voyageInfos} setVoyageInfos={setVoyageInfos} travelTime={travelTime} setTravelTime={setTravelTime} />
    </div>
  );
}

export default App;
