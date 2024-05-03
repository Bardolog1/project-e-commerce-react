import React from "react";
import "./InputDefault.css";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  border: none;
  width: 100%;
  height: 100%;

  &.ambiented {
    background-color: transparent;
    border-bottom: 1px solid var(--primary-color);
    color: var(--primary-color);
  }

  &.rounded:focus,
  &.rounded:valid {
    border-radius: 10px;
    transition: border 0.6s ease;
  }

  &:focus,
  &:valid {
    outline: none;
    border: 1px solid var(--primary-color-text-contrast);
  }

  &:focus ~ label,
  &:valid ~ label {
    top: 0;
    left: 2%;
    background-color: var(--body-background);
    padding: 0 5%;
    border-radius: 20px;
    transform: translate(0, 0);
    font-size: 0.8em;
    color: var(--primary-color-text-contrast);
    z-index: 1;
  }
`;

const Label = styled.label`
  font-size: 1em;
  position: absolute;
  color: var(--secondary-color-text-fixed);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.8s ease-in, background-color 0s ease, color 0s ease;

  z-index: -1;

  &:active {
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

const InputDefault = ({ ...props }) => {
  return (
    <div className="input-default">
      <Input
        required={props.required}
        id={props.label}
        type={props.type}
        placeholder={props.decorated ? "" : props.label}
        className={`${props.darkMode ? "ambiented" : ""} ${
          props.rounded ? "rounded" : ""
        }`}
        {...props}
      />
      {props.decorated && (
        <Label className={props.darkMode ? "ambiented" : ""} id={props.label}>
          {props.label}
        </Label>
      )}
    </div>
  );
};

export default InputDefault;
