import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SIGN_IN_SCHEME } from "../utils/validation";
import * as UserActionCreators from "../../src/actions/userActionCreators";
import styles from "./style.module.scss";
const initialValues = {
  email: "",
  password: "",
  passwordConf: "",
};

function RegForm(props) {
  const dispatch = useDispatch();
  const [passwordState, setPasswordState] = useState(false);
  const changePasswordState = () => {
    setPasswordState(!passwordState);
  };
  const submitHandler = (values, formikBag) => {
    const action = UserActionCreators.createUserRequest(values);
    dispatch(action);
    formikBag.resetForm();
  };
  return (
    <section className="test">
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={SIGN_IN_SCHEME}
        validateOnChange={false}
      >
        {(formikProps) => {
          return (
            <Form>
              <h1>CREATE AN ACCOUNT</h1>
              <main>
                <div>
                  <Field type="text" name="email" placeholder="email" />
                  <ErrorMessage name="email" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Field
                    className="test"
                    name="password"
                    placeholder="password"
                    type={passwordState ? "text" : "password"}
                  />
                  <ErrorMessage name="password" />
                  <Field
                    name="passwordConf"
                    placeholder="confirm password"
                    type={passwordState ? "text" : "password"}
                  />
                  <ErrorMessage name="passwordConf" />
                </div>
                <div className={styles.checkbox}>
                  <Field
                    type="checkbox"
                    onChange={changePasswordState}
                    checked={passwordState}
                    name="isShownPassword"
                  />
                  <label>Show password</label>
                </div>
                <button type="submit">CREATE</button>
              </main>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}

export default RegForm;
