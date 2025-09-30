import React from "react";
import logo from "../../assets/logo.png";
import coin from "../../assets/coin.png";

const Navbar = ({availableBalance}) => {
  return (
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
        <div className="btn btn-warning">
          <a>
            <span>{availableBalance}</span> COINS
          </a>
          <img className="w-[20px]" src={coin} alt="Amount of Coin" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
