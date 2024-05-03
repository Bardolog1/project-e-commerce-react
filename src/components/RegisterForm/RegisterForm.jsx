import React from "react";
import "./RegisterForm.css";
import TextDefault from "../TextDefault/TextDefault";
import InputDefault from "../InputDefault/InputDefault";
import ButtonDefault from "../ButtonDefault/ButtonDefault";
import { Formik } from "formik";
import { registerSchema } from "../../validationSchemas/validationsRegister";
import FormikField from "../FormikField/FormikField";

const RegisterForm = () => {
  const initialValues = {
    username: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
  };

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

        <Formik
          validationSchema={registerSchema}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => {
            return (
              <form className="Register-form">
                <FormikField
                  name="username"
                  required
                  decorated
                  label="Username"
                  type="text"
                  darkMode
                />
                <FormikField
                  name="name"
                  required
                  decorated
                  label="Name"
                  type="text"
                  darkMode
                />
                <FormikField
                  name="lastName"
                  required
                  decorated
                  label="LastName"
                  type="text"
                  darkMode
                />
                <FormikField
                  name="email"
                  required
                  decorated
                  label="E-Mail"
                  type="text"
                  darkMode
                />
                <FormikField
                  name="password"
                  required
                  decorated
                  label="Password"
                  type="password"
                  darkMode
                />
                <FormikField
                  name="repeatPassword"
                  required
                  decorated
                  label="Verify password"
                  type="password"
                  darkMode
                />

                <ButtonDefault style={styles.buttonRegister} darkMode={true} onClick={handleSubmit}>
                  <TextDefault type="buttonText" darkMode={false}>
                    Sign up
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

export default RegisterForm;
