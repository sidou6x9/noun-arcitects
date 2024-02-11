import React from "react";
import { NavLink } from "react-router-dom";
import "./Section1.css";
import Section0 from "./Section0";

function Section1() {
  return (
    <div className="section1">
      <div className="section1-container">
        <div className="section1-text">
          <h1 className="section1-title">Pourquoi nous choisir ?</h1>
          <h2>
            Med Archiects est spécialisé dans la conception et l’aménagement
            intérieur et extérieur de vos locaux professionnels ou personnels .
            <br />
            Notre mission : Vous écouter, vous conseiller et réaliser avec vous
            des aménagements tous corps d’état, adaptés à vos besoins et votre
            budget.
          </h2>
        </div>
        <Section0 />
        <div className="section1-card">
          <div className="section1-subcard-text">
            <h3>Un intérieur élégant et fonctionnel</h3>
            <p>
              Découvrez nos intérieurs sur mesure, conçus pour captiver vos
              sens.
              <br /> Des choix de mobilier harmonieux aux détails soignés pour
              vous offrir un intérieur qui éveille votre imagination et vous
              enchante chaque jour.
            </p>
            <NavLink className="logo" to="/nos-services">
              En Savoir Plus
            </NavLink>
          </div>
          <div className="section1-subcard-img1"></div>
        </div>
        <div className="section1-card-odd ">
          <div className="section1-subcard-img2"></div>
          <div className="section1-subcard-text">
            <h3>Harmonisez intérieur et extérieur </h3>
            <p>
              Harmonisez votre espace intérieur avec l'extérieur en optant pour
              nos designs exclusifs dédiés aux appartements.
              <br /> Des balcons aux terrasses en passant par les jardins
              suspendus, nous créerons des espaces extérieurs qui complètent et
              subliment votre intérieur, vous offrant un style de vie harmonieux
              et équilibré.
            </p>
            <NavLink className="logo" to="/nos-services">
              En Savoir Plus
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
