import React from "react";
import clapper from "../assets/clapper.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo">
        <img src={clapper} alt="logo" />
        <h1>Moviez</h1>
      </div>
      <div className="media">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
  );
}
