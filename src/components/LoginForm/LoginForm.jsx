import React from "react";
import "./LoginForm.css";
import TextDefault from "../TextDefault/TextDefault";
import ButtonDefault from "../ButtonDefault/ButtonDefault";
import { Formik } from "formik";
import { loginSchema } from "../../validationSchemas/validationsLogin";
import FormikField from "../FormikField/FormikField";

const LoginForm = () => {
  const styles = {
    buttonLogin: {
      width: "100%",
      height: "40px",
    },
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <>
      <div className="login-form">
        <TextDefault type="title" darkMode={true}>
          Login to
        </TextDefault>

        <Formik
          validationSchema={loginSchema}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => {
            return (
              <form className="formLogin">
                <FormikField
                  name="username"
                  required
                  decorated
                  label="Username"
                  type="text"
                  darkMode
                />
                <FormikField
                  name="password"
                  required
                  decorated
                  label="Password"
                  type="password"
                  secureTextEntry
                  darkMode
                />
                <ButtonDefault style={styles.buttonLogin} darkMode={true} onClick={handleSubmit}>
                  <TextDefault type="buttonText" darkMode={false}>
                    Access
                  </TextDefault>
                </ButtonDefault>
             </form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
