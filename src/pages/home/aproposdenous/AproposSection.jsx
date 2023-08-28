import React from "react";
import "./AproposSection.css";

function AproposSection() {
  return (
    <div className="apropos-section-container">
      <div className="apropos-section">
        <div className="apropos-left">
          <h1>À propos de nous</h1>
          <p>
            Bienvenue chez Start2Grow ! Nous sommes une équipe passionnée et
            dévouée spécialisée dans la création d'espaces intérieurs
            exceptionnels.
            <br /> <br /> Notre objectif est de transformer les maisons en des
            lieux où le confort, l'esthétique et la fonctionnalité se
            rencontrent.
            <br /> <br /> Notre équipe d'experts en design d'intérieur possède
            une vaste expérience dans le domaine, et nous sommes fiers de notre
            capacité à comprendre et à répondre aux besoins uniques de chaque
            client.
            <br /> <br /> Que vous souhaitiez rénover votre maison, créer un
            nouvel espace de vie ou simplement rafraîchir votre décoration, nous
            sommes là pour vous accompagner tout au long du processus.
            <br /> <br /> Nous croyons en l'importance de créer des espaces qui
            reflètent la personnalité et le style de vie de nos clients.
            <br /> <br /> Notre approche est axée sur la collaboration et la
            communication, car nous croyons fermement que chaque projet doit
            être une véritable expression de vos goûts et de vos besoins.
            <br /> <br /> Nous travaillons en étroite collaboration avec vous
            pour comprendre vos aspirations, vos préférences esthétiques et vos
            contraintes budgétaires, afin de créer un espace qui vous ressemble.
            <br /> <br />
          </p>
        </div>
        <div className="apropos-right">
          {/* <div className="apropos-right1"></div> */}
          <div className="apropos-right2"></div>
        </div>
      </div>
    </div>
  );
}

export default AproposSection;
