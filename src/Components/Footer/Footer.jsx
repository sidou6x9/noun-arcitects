import React from "react";
import "./Footer.css";
import Logos from "../logos/Logos";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>Med Architects</h1>
        <Logos />
      </div>
      <div className="footer-right">
        <p>Copyright © 2024 med Sahnoun</p>
        <p>Phone : +6969696969</p>
        <p>Email : mohamedSahnoun@live.fr</p>
        
      </div>
    </div>
  );
}

export default Footer;
