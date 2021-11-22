import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

function RegForm(props) {
  const [passwordState, setPasswordState] = useState(false);
  const changePasswordState = () => {
    setPasswordState(!passwordState);
  };
  return (
    <section>
      <Formik>
        {(formikProps) => {
          return (
            <Form>
              <h1>Make an account</h1>
              <Field type="text" name="email" placeholder="email" />
              <div>
                <Field
                  name="password"
                  placeholder="password"
                  type={passwordState ? "text" : "password"}
                />
                <Field
                  name="passwordConf"
                  placeholder="confirm password"
                  type={passwordState ? "text" : "password"}
                />
              </div>
              <div>
                <Field
                  type="checkbox"
                  onChange={changePasswordState}
                  checked={passwordState}
                  name="isShownPassword"
                />
                <p>Show password</p>
              </div>
              <button type="submit">Create account</button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}

export default RegForm;
