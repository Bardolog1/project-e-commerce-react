import React, { useState } from "react";
import "./NavBar.css";
import NavBarItem from "../NavBarItem/NavBarItem.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ToggleButton from "../ToogleAmbient/ToogleButton.jsx";
import { Link } from "react-router-dom";

const NavBar = ({ items, ...props }) => {
  return (
    <>
      <div className="navbar">
        <div className="container-navbar">
          <div className="left">
            <div className="logo">
              <a href={props.logo.redirect} rel="noreferrer">
                <img src={props.logo.src} alt={props.logo.alt} />
              </a>
            </div>
          </div>

          <ul className="right">
            {props.searchBar ? (
              <li>
                {" "}
                <SearchBar></SearchBar>{" "}
              </li>
            ) : null}
            {items.map((item, index) => (
             
                <NavBarItem
                  key={index}
                  title={item.title}
                  url={item.url}
                  icon={item.icon}
                  titleActive={item.titleActive}
                />
          
            ))}
            {props.darkMode ? (
              <li>
                {" "}
                <ToggleButton> </ToggleButton>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
