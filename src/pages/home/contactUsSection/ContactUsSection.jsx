import React from "react";
import "./ContactUsSection.css";

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
          <div className="contact-hero-link">Nous Contacter</div>
        </div>
        <div className="contact-section-container2"></div>
      </div>
    </div>
  );
}

export default ContactUsSection;
