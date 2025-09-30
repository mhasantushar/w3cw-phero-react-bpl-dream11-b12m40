import React from "react";
import iconRemove from "../../assets/remove-icon.png";

function SPlayerCard({selectedPlayer}) {
  // console.log (selectedPlayer);

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
      <img src={iconRemove} alt="Remove this player" />
    </div>
  );
}

export default SPlayerCard;
