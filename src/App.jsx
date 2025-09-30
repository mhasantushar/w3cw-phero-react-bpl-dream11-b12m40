import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import APlayers from "./components/aplayers/APlayers";
import SPlayers from "./components/splayers/SPlayers";
import { Suspense, useState } from "react";

const fetchAvailablePlayers = async () => {
  const resp = await fetch("/bpl-players.json");
  return resp.json();
};
const promiseAvailablePlayers = fetchAvailablePlayers();

function App() {
  const [toggleGallary, setToggleGallary] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  console.log(selectedPlayers);

  return (
    <>
      <Navbar availableBalance={availableBalance} />
      <Hero />

      <section className="flex justify-between items-center mx-auto mb-8 max-w-[1200px]">
        <h2 className="font-bold text-xl">
          {toggleGallary ? "Available Players" : "Selected Players"}
        </h2>

        <div>
          <button
            onClick={() => setToggleGallary(true)}
            className={`border-r-0 rounded-r-none rounded-l-3xl btn ${
              toggleGallary ? "btn-active" : "btn-inactive"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setToggleGallary(false)}
            className={`border-l-0 rounded-r-3xl rounded-l-none btn ${
              toggleGallary ? "btn-inactive" : "btn-active"
            }`}
          >
            Selected (<span>{selectedPlayers.length}</span>)
          </button>
        </div>
      </section>

      <Suspense
        fallback={
          <span className="flex mx-auto loading loading-infinity loading-xl"></span>
        }
      >
        {toggleGallary ? (
          <APlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            promiseAvailablePlayers={promiseAvailablePlayers}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ) : (
          <SPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>
        )}
      </Suspense>
    </>
  );
}

export default App;
