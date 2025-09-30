import React from "react";
import SPlayerCard from "../splayercard/SPlayerCard";

const SPlayers = ({ selectedPlayers }) => {
  // console.log(selectedPlayers);

  return (
    <section className="mx-auto mb-20 max-w-[1200px]">
      {selectedPlayers.map((selectedPlayer) => (
        <SPlayerCard selectedPlayer={selectedPlayer} />
      ))}

      {/* <SPlayerCard /> */}
      <button className="btn btn-soft btn-success">Add More Player</button>
    </section>
  );
};

export default SPlayers;
