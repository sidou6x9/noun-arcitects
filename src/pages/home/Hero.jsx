import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>Build To Live</h2>
        <p>
        "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
        </p>
        <p className="le-corbusier">—Le Corbusier</p>
        <NavLink className="logo-hero" to="/realisations">
            Explore
          </NavLink>
        {/* <p>
          Transformez votre maison en un lieu d'exception grâce à notre design
          personnalisé.
          <br />
          Exprimez votre style et créez un intérieur unique.
        </p>
        <div className="hero-buttons">
          <NavLink className="logo" to="/nos-services">
            Nos Services
          </NavLink>

          <NavLink className="logo" to="/contactUs">
            Nous contacter
          </NavLink>
        </div> */}
      </div>
     <video className="video-bg" autoPlay muted loop>
      <source  src="/pics/road_-_88195 (1440p).mp4" type="video/mp4"/>
     </video>
    </div>
  );
}

export default Hero;