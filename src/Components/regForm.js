import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { SIGN_IN_SCHEME } from "../utils/validation";
import * as UserActionCreators from "../../src/actions/userActionCreators";
import styles from "./style.module.scss";
import open from "../img/open.png";
import close from "../img/closed.png";
import CustomField from "./field";
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
  const [passwordConfState, setPasswordConfState] = useState(false);
  const changePasswordConfState = () => {
    setPasswordConfState(!passwordConfState);
  };
  const submitHandler = (values, formikBag) => {
    const action = UserActionCreators.createUserRequest(values);
    dispatch(action);
    formikBag.resetForm();
  };
  return (
    <main>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={SIGN_IN_SCHEME}
        validateOnChange={false}
      >
        {(formikProps) => {
          return (
            <Form>
              <h1 className={styles.heading}>CREATE AN ACCOUNT</h1>

              <CustomField name="email" placeholder="Email" type="text" />

              <CustomField
                name="password"
                placeholder="Password"
                type={passwordState ? "text" : "password"}
                onClick={changePasswordState}
                classNameForImg={styles.eye}
                src={passwordState ? close : open}
                alt="opened eye"
              />

              <CustomField
                name="passwordConf"
                placeholder="Confirm password"
                type={passwordConfState ? "text" : "password"}
                onClick={changePasswordConfState}
                classNameForImg={styles.eye}
                src={passwordConfState ? close : open}
                alt="opened eye"
              />

              <div className={styles.btnWrapper}>
                <button type="submit">CREATE</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </main>
  );
}

export default RegForm;
