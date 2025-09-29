import React, { use } from "react";
import iconPlayer from "../../assets/player-icon.png";
import iconFlag from "../../assets/flag-icon.png";

const APlayers = ({ promiseAvailablePlayers }) => {
  const availablePlayerData = use(promiseAvailablePlayers);
  console.log(availablePlayerData);

  return (
    <section className="mx-auto mb-20 max-w-[1200px]">
      <h2 className="mb-16 font-bold text-xl">Avaialble Players</h2>

      <div className="bg-base-100 shadow-sm w-96 card">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-4 mb-4">
            <img
              className="w-[20px] h-[20px] text-[#131313cc]"
              src={iconPlayer}
              alt="Player Icon"
            />
            <h2 className="text-[#131313] card-title">
              Player Name
              <div className="badge badge-primary">Role</div>
            </h2>
          </div>

          <div className="flex justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <img className="opacity-50" src={iconFlag} alt="Flag Icon" />
              <p className="text-[#131313]">Country</p>
            </div>
            <button className="btn btn-active">All-Rounder</button>
          </div>
          <hr className="text-[#1313131a]" />

          <div className="flex justify-between items-center gap-4 mt-4">
            <h4 className="font-bold">Rating</h4>
            <h4 className="font-bold">5.00</h4>
          </div>

          <h4>Player Role Details</h4>

          <div className="flex justify-between items-center gap-4">
            <h4 className="font-semibold">
              Price: $<span>000000000.00</span>
            </h4>
            <button className="btn-outline btn">Default</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APlayers;
