import React, { useState } from "react";
import iconPlayer from "../../assets/player-icon.png";
import iconFlag from "../../assets/flag-icon.png";

const APlayerCard = ({
  availableBalance,
  setAvailableBalance,
  availablePlayer,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  // console.log (availablePlayer);

  const [isSelected, setIsSelected] = useState(false);

  const handlePlayerSelection = (thisPlayer) => {
    if (availableBalance < thisPlayer.BasePriceInIpl) {
      alert("Insufficient fund");
    } else {
      setIsSelected(!isSelected);
      setAvailableBalance(availableBalance - thisPlayer.BasePriceInIpl);
      setSelectedPlayers([...selectedPlayers, thisPlayer]);
    }
  };

  return (
    <div className="bg-base-100 shadow-sm card">
      <figure>
        <img
          className="object-cover"
          src={availablePlayer.PlayerImage}
          alt={availablePlayer.PlayerName}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-4">
          <img
            className="w-[20px] h-[20px] text-[#131313cc]"
            src={iconPlayer}
            alt={availablePlayer.PlayerName}
          />
          <h2 className="text-[#131313] card-title">
            {availablePlayer.PlayerName}
          </h2>
        </div>

        <div className="flex justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <img
              className="opacity-50"
              src={iconFlag}
              alt={availablePlayer.PlayerCountry}
            />
            <p className="text-[#131313]">{availablePlayer.PlayerCountry}</p>
          </div>
          <button className="btn btn-active">
            {availablePlayer.PlayerRole}
          </button>
        </div>
        <hr className="text-[#1313131a]" />

        <div className="flex justify-between items-center gap-4 mt-4">
          <h4 className="font-bold">Rating</h4>
          <h4 className="font-bold">
            {availablePlayer.Impact} {availablePlayer.SuccessRating}
          </h4>
        </div>

        <h4 className="italic">{availablePlayer.PlayerRoleDesc}</h4>

        <div className="flex justify-between items-center gap-4">
          <h4 className="font-semibold">
            Price: ${availablePlayer.BasePriceInIpl}
          </h4>
          <button
            onClick={() => handlePlayerSelection(availablePlayer)}
            disabled={isSelected}
            className="btn-outline btn"
          >
            {isSelected ? "Player Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default APlayerCard;
