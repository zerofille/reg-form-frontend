import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";
import styles from "./style.module.scss";
function CustomField(props) {
  const {
    className,
    name,
    placeholder,
    type,
    onClick,
    classNameForImg,
    src,
    alt,
  } = props;
  return (
    <div className={styles.inputWrapper}>
      <Field
        className={className}
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
