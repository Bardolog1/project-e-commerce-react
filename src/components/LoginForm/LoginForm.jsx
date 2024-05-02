import React from "react";
import "./LoginForm.css";
import TextDefault from "../TextDefault/TextDefault";
import InputDefault from "../InputDefault/InputDefault";
import ButtonDefault from "../ButtonDefault/ButtonDefault";

const LoginForm = () => {

  const styles = {
    buttonLogin : {
      width: "100%",
      height: "40px",
      
    }
  }


  return (
    <>
      <div className="login-form">
        <TextDefault type="title" darkMode={true}>
          Login to
        </TextDefault>
        <form className="formLogin">
          <InputDefault type="text" placeholder="Username" darkMode={true} />
          <InputDefault
            type="password"
            placeholder="password"
            darkMode={true}
          />
          <ButtonDefault style={styles.buttonLogin} darkMode={true}>
            <TextDefault type="buttonText" darkMode={false}>Access</TextDefault>
          </ButtonDefault>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
