import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  margin: 10px auto;
  padding: 5px 10px;

  & .iconItem {
    max-width: 20px;
    margin-right: 10px;
    opacity: 0.5;
    color: var(--primary-color);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: var(--primary-color-text-contrast);
    transition: all 0.5s ease;
  }

  &:hover .dropdown-item .iconItem {
    opacity: 1;
  }

  &:hover .dropdown-item span {
    cursor: pointer;
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(0.98);
  }
`;

const Item = styled.li`
  background-color: transparent;
  list-style: none;
  padding: 10px 0;
`;

const DropDownItem = ({ id, text, url, icon, style, ...props }) => {
  const spanTextStyles = {
    fontSize: "0.8rem",
    fontWeight: "400",
    color: "var(--primary-color)",
    maxWidth: "200px",
    marginLeft: "10px",
  };

  const linkHandler = (event) => {};

  return (
    <StyledLink to={url} style={style}>
      <Item id={id} className="dropdown-item" {...props}>
        <i className={icon + " " + "iconItem"} />
        <span style={spanTextStyles}>{text}</span>
      </Item>
    </StyledLink>
  );
};

export default DropDownItem;
