import React, { useState } from "react";
import { ErrorMessage, Field, useField } from "formik";
import styles from "./style.module.scss";
import cx from "classnames";
function CustomField(props) {
  const [meta] = useField(props);
  const { name, placeholder, type, onClick, classNameForImg, src, alt } = props;
  const validStyles = cx(styles.field, {
    [styles.field]: !meta.error && meta.touched,
    [styles.badField]: !meta.error && meta.touched,
  });

  return (
    <div className={styles.inputWrapper}>
      <Field
        className={validStyles}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <img onClick={onClick} className={classNameForImg} src={src} alt={alt} />
      <ErrorMessage
        render={(message) => <div className={styles.error}>{message}</div>}
        name={name}
      />
    </div>
  );
}

export default CustomField;
