import "./App.css";

import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import APlayers from "./components/aplayers/APlayers";
import SPlayers from "./components/splayers/SPlayers";

// const fetchPlayers = async () => {
//   const resp = fetch("/ipl-players.json");
// };

function App() {
  return (
    <>     
      <Navbar/>
      <Hero/>

      {/* //SECTION - PAGE CONTENT AREA */}

      <APlayers />

      <SPlayers />

      {/* //!SECTION page content area */}
    </>
  );
}

export default App;
