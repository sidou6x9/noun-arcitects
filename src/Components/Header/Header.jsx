import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./style.module.css";
import { IoMenuOutline as MenuIcon } from "react-icons/io5";
import { LINKS } from "../../data";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      {/* logo */}
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <NavLink className="logo" to="/">
            <img src="/pics/Capture_d_écran_2024-02-03_201657-removebg-preview(1).png" alt="" />
          </NavLink>
        </div>
        {/* Links */}
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
        
        <div className={classes.menuBtn} onClick={openSidebar}>
          <MenuIcon size={33} />
        </div>
      </div>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </header>
  );
}

export default Header;
