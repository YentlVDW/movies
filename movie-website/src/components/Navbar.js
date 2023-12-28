import React from "react";
import { useState } from "react";
import clapper from "../assets/clapper.png";

function Navbar() {
  const [color, setColor] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="logo">
          <img src={clapper} alt="clapperboard" />
          <h1>Moviez</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
