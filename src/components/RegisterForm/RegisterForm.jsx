import React from "react";
import "./RegisterForm.css";
import TextDefault from "../TextDefault/TextDefault";
import InputDefault from "../InputDefault/InputDefault";
import ButtonDefault from "../ButtonDefault/ButtonDefault";

const RegisterForm = () => {
  const styles = {
    buttonRegister: {
      width: "100%",
      height: "40px",
      gridArea: "btnRegister",
    },
  };

  return (
    <>
      <div className="register-form">
        <TextDefault type="title" darkMode={true}>
          Register
        </TextDefault>
        <form className="Register-form">
          <InputDefault
            required
            decorated
            label="Username"
            type="text"
            darkMode
          />
          <InputDefault
            required
            decorated
            label="Name"
            type="text"
            darkMode
          />
          <InputDefault
            required
            decorated
            label="LastName"
            type="text"
            darkMode
          />
          <InputDefault
            required
            decorated
            label="E-Mail"
            type="text"
            darkMode
          />
          <InputDefault
            required
            decorated
            label="Password"
            type="password"
            darkMode
          />
          <InputDefault
            required
            decorated
            label="Verify password"
            type="password"
            darkMode
          />

          <ButtonDefault style={styles.buttonRegister} darkMode={true}>
            <TextDefault type="buttonText" darkMode={false}>
              Sign up
            </TextDefault>
          </ButtonDefault>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
