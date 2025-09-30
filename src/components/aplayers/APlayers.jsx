import React, { use } from "react";
// import iconPlayer from "../../assets/player-icon.png";
// import iconFlag from "../../assets/flag-icon.png";
import APlayerCard from "../aplayercard/APlayerCard";

const APlayers = ({
  availableBalance,
  setAvailableBalance,
  promiseAvailablePlayers,
  selectedPlayers,
  setSelectedPlayers
}) => {
  const availablePlayers = use(promiseAvailablePlayers);
  // console.log(availablePlayers);

  return (
    <section className="mx-auto mb-20 max-w-[1200px]">
      {/* <h2 className="mb-16 font-bold text-xl">
        {availablePlayers.length} Avaialble Players Listed
      </h2> */}

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {availablePlayers.map((availablePlayer) => (
          <APlayerCard
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            key={availablePlayer.ID}
            availablePlayer={availablePlayer}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ))}
      </div>
    </section>
  );
};

export default APlayers;
