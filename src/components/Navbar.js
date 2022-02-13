import React from "react";
import Logo from "../Logoani.gif";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border flex space-x-8 items-center">
      <img
        src={Logo}
        alt="Loading..."
        style={{ height: "170px", width: "170px" }}
      />
      <Link to="/" className="text-teal-700 font-bold text-xl md:text-3xl ">
        Movies
      </Link>
      <Link
        to="/favourites"
        className="text-teal-700 font-bold text-xl md:text-3xl "
      >
        Favourites
      </Link>
    </div>
  );
}

export default Navbar;
