import React, { use } from "react";

const APlayers = ({promiseAvailablePlayers}) => {

  const availablePlayerData = use(promiseAvailablePlayers);
  console.log(availablePlayerData);

  return (
    <section className="mx-auto mb-20 max-w-[1200px]">
      <h2 className="mb-16 font-bold text-xl">Avaialble Players</h2>
    </section>
  );
};

export default APlayers;
