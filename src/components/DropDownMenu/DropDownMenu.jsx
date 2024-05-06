import React from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import styled from "styled-components";


const DropDown = styled.div`
    width: 100%;
    position: relative;
    background-color: var(--body-background);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    
    
    
    &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 20%;
        height: 20px;
        width: 20px;
        background-color: var(--body-background);
        transform: rotate(45deg);
    }
    
    & .dropdown-menu {
        display: flex;
        position: relative;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
   
    }
    
    
    &.open {
        display: flex;
    }
    
    &.close {
        display: none;
    }
    
`



const DropDownMenu = ({ items,isOpened, ...props }) => {
  return (
    <DropDown className={isOpened ? "open" : "close"} {...props}>
      <ul className="dropdown-menu">
        {items &&
          items.map((item) => (
            <DropDownItem key={item.id} img={""} text={item.title} url={item.url}></DropDownItem>
          ))}
      </ul>
    </DropDown>
  );
};

export default DropDownMenu;
