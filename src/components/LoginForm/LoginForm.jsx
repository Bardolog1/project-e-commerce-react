import React from "react";
import "./LoginForm.css";
import TextDefault from "../TextDefault/TextDefault";
import InputDefault from "../InputDefault/InputDefault";
import ButtonDefault from "../ButtonDefault/ButtonDefault";

const LoginForm = () => {
  const styles = {
    buttonLogin: {
      width: "100%",
      height: "40px",
    },
  };
  
  const initilValues = {
    username: "",
    password: "",
  }

  return (
    <>
      <div className="login-form">
        <TextDefault type="title" darkMode={true}>
          Login to
        </TextDefault>
        <form className="formLogin">
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
            label="Password"
            type="password"
            darkMode
          />
          <ButtonDefault style={styles.buttonLogin} darkMode={true}>
            <TextDefault type="buttonText" darkMode={false}>
              Access
            </TextDefault>
          </ButtonDefault>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
