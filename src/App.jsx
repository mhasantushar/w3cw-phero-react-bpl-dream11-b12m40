import "./App.css";
import logo from "./assets/logo.png";
import coin from "./assets/coin.png";
import bgimg from "./assets/bgimg.png";
import herologo from "./assets/banner-main.png"

function App() {
  return (
    <>
      {/* //SECTION - NAVBAR*/}

      <section className="mx-auto max-w-[1200px] navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedule</a>
              </li>
            </ul>
          </div>
          <img src={logo} alt="Dream11 Logo" />
          <a className="text-xl btn btn-ghost">Dream11</a>
        </div>
        <div className="hidden lg:flex navbar-center">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="bg-amber-400 btn">
            <a>
              <span>6000000000</span> COINS
            </a>
            <img className="w-[20px]" src={coin} alt="Amount of Coin" />
          </div>
        </div>
      </section>
      {/* //!SECTION navbar*/}

      {/* //SECTION - HERO AREA */}
      <section className="mx-auto px-3 py-16 rounded-3xl max-w-[1200px]">
        <div>
          <div className="bg-[url('./assets/bgimg.png')] bg-cover inverted rounded-3xl min-h-[545px] overflow-hidden hero">
            {/* <div className="hero-overlay"></div> */}
            <div className="text-center hero-content">
              <div >
                <img className="block mx-auto mb-6" src={herologo} alt="Hero Image" />
                <h1 className="mb-5 font-bold text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="mb-5">
                  Beyond Boundaries Beyond Limits
                </p>
                <button className="bg-[#E7FE29] rounded-3xl btn">Claim Free Credit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //!SECTION hero area */}
    </>
  );
}

export default App;
