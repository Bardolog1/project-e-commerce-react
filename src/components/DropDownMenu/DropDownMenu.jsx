import React from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import styled from "styled-components";


const DropDown = styled.div`
    
    position: relative;
    background-color: var(--body-background);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    justify-content: center;
    display: flex;
    
    & h3 {
      width: 100%;
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      padding: 10px 0;
      color: var(--primary-color);
      line-height: 1rem;
    }
    
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
    
    
    &.open {
        display: flex;
    }
    
    &.close {
        display: none;
    }
    
`

const styles = {
  childrenDropDown: {
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  }
  
}

const DropDownMenu = ({ items,isOpened, style, title, ...props }) => {
  return (
    <DropDown className={isOpened ? "open" : "close"} style={style}>
      <ul className="dropdown-menu">
        <h3>{title}</h3>
        {items &&
          items.map((item) => (
            <DropDownItem style={styles.childrenDropDown} key={item.id} icon={item.icon} text={item.title} url={item.url} ></DropDownItem>
          ))}
      </ul>
    </DropDown>
  );
};

export default DropDownMenu;
