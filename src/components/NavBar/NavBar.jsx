import React, { useEffect, useState } from "react";
import "./NavBar.css";
import NavBarItem from "../NavBarItem/NavBarItem.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ToggleButton from "../ToogleAmbient/ToogleButton.jsx";
import { Link } from "react-router-dom";
import Logo from "../Logocomponent/Logo.jsx";

const NavBar = ({ items, ...props }) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBarBackground, setNavBarBackground] = useState(false);
 
  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  
  useEffect(() => {
    changeBackground();
    console.log(scrollPosition);
    console.log(navBarBackground);
  },[scrollPosition]);
  

  
  const changeBackground = () => {
    if (scrollPosition >= 500) {
      setNavBarBackground(true);
    } else {
      setNavBarBackground(false);
    }
  }
  
  

  return (
    <>
      <div className= {`navbar ${navBarBackground?"with-color":"without-color"}`}  {...props}>
        <div className="container-navbar">
          <div className="left">
            <div className="logo">
              <Link to={"/"} rel="noreferrer">
                <Logo className="logoSVG"  darkMode={navBarBackground}/>
              </Link>
            </div>
          </div>

          <ul className="right">
            {props.searchBar ? (
              <li className="search-bar">
                <SearchBar navScroll={navBarBackground}></SearchBar>
              </li>
            ) : null}
            {items.map((item) => (
              
                <NavBarItem
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  url={item.url}
                  icon={item.icon}
                  titleActive={item.titleActive}
                  navScroll={navBarBackground}
                  hasDropdown={item.hasDropdown}
                  dropdownItems={item.dropdownItems}
                  
                />
          
            ))}
            {props.darkMode ? (
              <li className="toggle">
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
