import React from "react";
import "./LoginForm.css";
import TextDefault from "../TextDefault/TextDefault";
import InputDefault from "../InputDefault/InputDefault";

const LoginForm = () => {
  return (
    <>
      <div className="login-form">
        <TextDefault type="title" darkMode={true}>
          Login
        </TextDefault>
        <form>
          <InputDefault type="text" placeholder="Username" darkMode={true} />
          <InputDefault
            type="password"
            placeholder="password"
            darkMode={true}
          />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
