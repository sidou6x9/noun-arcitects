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
            Start2Grow
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
          {/* <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.activeLink : "")}
          >
            Home
          </NavLink>
          <NavLink to="realisations">Nos Realisations</NavLink>
          <NavLink to="aboutUs">A propos de nous</NavLink>
          <NavLink to="contactUs">Nous Contacter</NavLink> */}
        </div>
        {/* Auth */}
        {/* <div className={classes.auth}>
          <NavLink to="login" className={classes.login}>
            Login
          </NavLink>
        </div> */}
        {/* Hamburger Menu btn */}
        <div className={classes.menuBtn} onClick={openSidebar}>
          <MenuIcon size={33} />
        </div>
      </div>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
    </header>
  );
}

export default Header;
