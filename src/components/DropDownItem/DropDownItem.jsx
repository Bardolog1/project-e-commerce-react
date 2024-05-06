import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

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

const DropDownItem = ({ id, text, url, ...props }) => {
  const spanTextStyles = {
    fontSize: "0.8rem",
    fontWeight: "400",
    color: "var(--primary-color)",
    margin: "0",
  };

  const linkHandler = (event) => {
  };

  return (
    <StyledLink to={url} >
      <Item id={id} className="dropdown-item" {...props}>
        <span style={spanTextStyles}>{text}</span>
      </Item>
    </StyledLink>
  );
};

export default DropDownItem;
