import React, { use } from "react";
import APlayerCard from "../aplayercard/APlayerCard";

const APlayers = ({
  availableBalance,
  setAvailableBalance,
  promiseAvailablePlayers,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const availablePlayers = use(promiseAvailablePlayers);
  // console.log(availablePlayers);

  return (
    <section className="mx-auto mb-20 max-w-[1200px]">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {availablePlayers.map((availablePlayer) => (
          <APlayerCard
            key={availablePlayer.ID}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            availablePlayer={availablePlayer}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ))}
      </div>
      {/* <APlayerCard/> */}
    </section>
  );
};

export default APlayers;
