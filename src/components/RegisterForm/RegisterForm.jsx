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
    }
  }


  return (
    <>
      <div className="register-form">
        <TextDefault type="title" darkMode={true}>
          Register
        </TextDefault>
        <form className="Register-form">
          <InputDefault type="text" placeholder="Username" darkMode={true} />
          <InputDefault type="text" placeholder="Your Name" darkMode={true} />
          <InputDefault
            type="text"
            placeholder="Your Last Name"
            darkMode={true}
          />
          <InputDefault type="text" placeholder="E-Mail" darkMode={true} />
          <InputDefault
            type="password"
            placeholder="password"
            darkMode={true}
          />
          <InputDefault
            type="password"
            placeholder="verify password"
            darkMode={true}
          />
         

          <ButtonDefault style={styles.buttonRegister}  darkMode={true}>
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
