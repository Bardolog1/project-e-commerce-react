import React, { useState } from "react";
import "./NavBar.css";
import NavBarItem from "../NavBarItem/NavBarItem.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ToggleButton from "../ToogleAmbient/ToogleButton.jsx";
import { Link } from "react-router-dom";

const NavBar = ({ items, ...props }) => {
  return (
    <>
      <div className="navbar" {...props}>
        <div className="container-navbar">
          <div className="left">
            <div className="logo">
              <Link to={props.logo.redirect} rel="noreferrer">
                <img src={props.logo.src} alt={props.logo.alt} />
              </Link>
            </div>
          </div>

          <ul className="right">
            {props.searchBar ? (
              <li className="search-bar">
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
              <li className="toggle">
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
