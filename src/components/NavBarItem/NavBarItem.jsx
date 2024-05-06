import React, { useEffect, useState } from "react";
import "./NavBarItem.css";
import { Link } from "react-router-dom";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const NavBarItem = ({ title, url, navScroll, id, ...props }) => {



  const [isClicked, setIsClicked] = useState(false);
  const animationClick = (k) => {
   
    document.querySelectorAll(".nav-item").forEach((element) => {
        
      if (id == element.id) {
        console.log(element.id + " "+ id);
        element.classList.add("animation");
        if(isClicked){
          setIsClicked(false);
        }else{
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
    }
  }

  return (
    <>
      <Link className={`nav-link ${navScroll ? " navScroll" : ""}`} to={url} onClick={() => animationClick(id)}>
      <li id={id} className="nav-item" >
       
          
          {props.titleActive === "true" ? (
            title
          ) : (
            <icon className={props.icon ? props.icon : ""} />
          )}

       
      </li> {props.hasDropdown && (
            <DropDownMenu isOpened={isClicked} style={styles.drop} items={props.dropdownItems}/>
          )}
      </Link>
    </>
  );
};

export default NavBarItem;
