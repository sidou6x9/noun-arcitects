import React from "react";
import "./ContactUsSection.css";
import { NavLink } from "react-router-dom";

function ContactUsSection() {
  return (
    <div className="contact-section-container-father">
      <div className="contact-section-container">
        <div className="contact-section-container1">
          <h2>Besoin de plus d'infos?</h2>

          <p>
            Contactez-nous dès aujourd'hui pour en savoir plus et découvrir
            comment nos accessoires peuvent apporter une touche de style à votre
            domicile.
          </p>
          <br />
          <NavLink className="contact-hero-link" to="/contactUs">
            Nous contacter
          </NavLink>
        </div>
        <div className="contact-section-container2"></div>
      </div>
    </div>
  );
}

export default ContactUsSection;