import React from "react";
import "./Footer.css";
import Logos from "../logos/Logos";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>Start2Grow</h1>
        <Logos />
      </div>
      <div className="footer-right">
        <p>Copyright © 2023 Start2Grow</p>
        <p>Phone : +33613493937</p>
        <p>Email : maxime.toumoulin@start2grow.fr</p>
        <p>Adresse : Paris, France</p>
      </div>
    </div>
  );
}

export default Footer;
