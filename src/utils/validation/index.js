import * as yup from "yup";


export const SIGN_IN_SCHEME = yup.object({
   
    email: yup
      .string()
      .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Inappropriate email")
      .required("Email is a required fieled"),
    password: yup
      .string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        "Password must contain 8 - 32 characters in upper- and lower- case and number"
      )
      .required("Password is a required field"),
    passwordConf: yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .required("You need to confirm password")
        .oneOf([yup.ref("password")], "Both passwords need to be the same"),
    }),
  });