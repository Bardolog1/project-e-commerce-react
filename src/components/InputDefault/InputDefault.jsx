import React from "react";
import "./InputDefault.css";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  border: none;

  &.ambiented {
    background-color: var(--body-background);
    border-bottom: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
  
`;

const InputDefault = ({ ...props }) => {
  return (
    <>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        className={props.darkMode ? "ambiented" : ""}
        {...props}
      />
    </>
  );
};

export default InputDefault;
