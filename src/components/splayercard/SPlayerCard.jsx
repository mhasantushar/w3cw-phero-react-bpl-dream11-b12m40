import React from "react";
import iconRemove from "../../assets/remove-icon.png";

function SPlayerCard({selectedPlayer, selectedPlayers, setSelectedPlayers}) {
  // console.log (selectedPlayer);

  const handlePlayerRemoval=(thisPlayer)=>{
    // console.log (thisPlayer);

    const playerIdToRemove = thisPlayer.ID;
    const remainingPlayers = selectedPlayers.filter(player => player.ID !== playerIdToRemove);
    // console.log (remainingPlayers);

    setSelectedPlayers(remainingPlayers);
  }

  return (
    <div className="flex justify-between items-center gap-4 mb-4 p-4 border border-[#D9D9D9] rounded-2xl">
      <div className="flex items-center gap-4">
        <img
          height={120}
          width={120}
          className="rounded-2xl object-cover"
          src={selectedPlayer.PlayerImage}
          alt={selectedPlayer.PlayerName}
        />
        <div>
          <h2 className="text-[#131313] card-title">
            {selectedPlayer.PlayerName}
            <div className="badge badge-success">{selectedPlayer.PlayerRole}</div>
          </h2>

          <h4 className="text-[#13131399] text-sm italic">{selectedPlayer.PlayerRoleDesc}</h4>
        </div>
      </div>
      <button onClick={()=>handlePlayerRemoval(selectedPlayer)} className="btn btn-soft btn-error"><img src={iconRemove} alt="Remove this player" />Remove</button>
    </div>
  );
}

export default SPlayerCard;
