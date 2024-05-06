import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropDownItem = ({ id, img, text, url, ...props }) => {
  const styles = {
    spanText: {
      fontSize: "0.8rem",
      fontWeight: "400",
      color: "var(--primary-color)",
      margin: "0",
    },
    
    linkStyle: {
      position: "relative",
      textDecoration: "none",
      width: "100%",
      
    }
  };

  const Item = styled.li`
    background-color: transparent;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      color: var(--primary-color-text-contrast);
      transition: all 0.5s ease;
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.5);
      transform: scale(0.98);
    }
  `;

  return (
    <>
      <Link style={styles.linkStyle} to={url} {...props}>
        <Item id={id} className="dropdown-item" {...props}>
          <span style={styles.spanText}>{text}</span>
        </Item>
      </Link>
    </>
  );
};

export default DropDownItem;
