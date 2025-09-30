import React from "react";
import SPlayerCard from "../splayercard/SPlayerCard";

const SPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  availableBalance,
  setAvailableBalance,
  setToggleGallary,
}) => {
  // console.log(selectedPlayers);

  return (
    <section className="mx-auto mb-20 max-w-[1200px]">
      {selectedPlayers.map((selectedPlayer) => (
        <SPlayerCard
          key={selectedPlayer.ID}
          selectedPlayer={selectedPlayer}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
        />
      ))}

      {/* <SPlayerCard /> */}
      <button onClick={() => setToggleGallary(true)} className="btn btn-soft btn-success">Add More Player</button>
    </section>
  );
};

export default SPlayers;
