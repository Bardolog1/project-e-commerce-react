import React, { useEffect, useState } from "react";
import "./NavBarItem.css";
import { Link } from "react-router-dom";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const NavBarItem = ({
  title,
  url,
  navScroll,
  id,
  activeItem,
  setItemActive,
  setActiveDropDown,
  activeDropDownItem,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const animationClick = (k) => {
    document.querySelectorAll(".nav-item").forEach((element) => {
      if (id == element.id) {
        element.classList.add("animation");
        setItemActive(k);
        if(props.hasDropdown){
          setActiveDropDown(k);
        }
        if (isClicked) {
          setIsClicked(false);
        } else {
          setIsClicked(true);
        }
        setTimeout(() => {
          element.classList.remove("animation");
        }, 3000);
      }
    });
  };

  const styles = {
    drop: {
      position: "absolute",
      top: "100%",
      left: "-100%",
      width: "200px",
      height: "auto",
      zIndex: "100",
    },
  };

  return (
    <>
      <Link
        className={`nav-link ${navScroll ? " navScroll" : ""} `}
        to={url}
        onClick={() => animationClick(id)}
      >
        <li
          id={id}
          className={` nav-item ${activeItem === id && !props.hasDropdown ? "active" : ""}`}
        >
          {props.titleActive === "true" ? (
            title
          ) : (
            <icon className={props.icon ? props.icon : ""} />
          )}
        </li>{" "}
        {props.hasDropdown &&  (
          <DropDownMenu
            isOpened={ activeDropDownItem === id && activeItem === id }
            style={styles.drop}
            items={props.dropdownItems}
          />
        )}
      </Link>
    </>
  );
};

export default NavBarItem;
