import React from "react";
import classes from "./style.module.css";
import { IoClose as CloseIcon } from "react-icons/io5";
import { LINKS } from "../../data";
import { NavLink } from "react-router-dom";
import Logos from "../logos/Logos";

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
      <span className={classes.closeIcon} onClick={closeSidebar}>
        <CloseIcon size={33} />
      </span>
      {/* Nav Links */}
      <div className={classes.linkss}>
        {LINKS.map((link, key) => {
          return (
            <div key={key}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? classes.activeLink : ""
                }
              >
                {link.name}
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="logos-list">
        <Logos />
      </div>
      
    </div>
  );
}

export default Sidebar;
