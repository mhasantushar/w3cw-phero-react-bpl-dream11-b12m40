import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import APlayers from "./components/aplayers/APlayers";
import SPlayers from "./components/splayers/SPlayers";
import { Suspense } from "react";



const fetchAvailablePlayers = async () => {
  const resp = await fetch("/ipl-players.json");
  return resp.json();
};


function App() {
  const promiseAvailablePlayers = fetchAvailablePlayers();

  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback ={<span className="flex mx-auto loading loading-infinity loading-xl"></span>}>
        <APlayers promiseAvailablePlayers={promiseAvailablePlayers} />
      </Suspense>

      <Suspense>
        <SPlayers />
      </Suspense> 

    </>
  );
}

export default App;
