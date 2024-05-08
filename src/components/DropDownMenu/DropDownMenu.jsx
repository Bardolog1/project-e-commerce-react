import React, { useEffect, useRef, useState } from "react";
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
    transition: all 0.5s ease;
  }

  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: all 0.5s ease;
  }

  &.close {
    opacity: 0;

    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.5s ease;
  }
`;

const styles = {
  childrenDropDown: {
    borderTop: "1px solid rgba(0, 0, 0, 0.05)",
  },
};

const DropDownMenu = ({
  items,
  isOpened,
  style,
  title,
  changeOpen,
  ...props
}) => {
  const menuRef = useRef();
  const [open, setIsOpened] = useState(false);

  useEffect(() => {
    setIsOpened(isOpened);
    let clickHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpened(false);
        changeOpen(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);
    
    return () => document.removeEventListener("mousedown", clickHandler);
  });

  return (
    <DropDown className={open ? "open" : "close"} style={style} ref={menuRef}>
      <ul className="dropdown-menu">
        <h3>{title}</h3>
        {items &&
          items.map((item) => (
            <DropDownItem
              style={styles.childrenDropDown}
              key={item.id}
              icon={item.icon}
              text={item.title}
              url={item.url}
            ></DropDownItem>
          ))}
      </ul>
    </DropDown>
  );
};

export default DropDownMenu;
