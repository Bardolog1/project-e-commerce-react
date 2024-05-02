import React, { useState } from "react";
import "./Login.css";
import InputDefault from "../../components/InputDefault/InputDefault.jsx";
import TextDefault from "../../components/TextDefault/TextDefault.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";

const Login = () => {
  const [loginOrRegister, setLoginOrRegister] = useState("register");

  /*Stylesheet*/
  const styles = {
    textButton: {
      color: "var(--primary-color-fixed)",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div className="login">
        <div className="container-login">
          {loginOrRegister === "login" ? (
            <>
              <LoginForm />
              <div className="options-select">
                <TextDefault
                  darkMode={true}
                  onClick={() => setLoginOrRegister("register")}
                >
                  don't have an account?{" "}
                  <b style={styles.textButton}>Register</b>
                </TextDefault>
              </div>
            </>
          ) : (
            <>
              <RegisterForm />
              <div className="options-select">
                <TextDefault
                  darkMode={true}
                  onClick={() => setLoginOrRegister("login")}
                >
                  Already have an account?  
                  <b style={styles.textButton}>  Login</b>
                </TextDefault>
              </div>
              
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
