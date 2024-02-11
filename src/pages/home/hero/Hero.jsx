import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>Maximisez Vos Espace Avec Style </h2>
        <p>
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
