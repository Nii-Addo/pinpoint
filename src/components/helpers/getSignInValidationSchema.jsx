import * as Yup from "yup";
const SignInValidationSchema = (values) => {
  return Yup.object().shape({
    email: Yup.string()
      .lowercase()
      .email("E-mail is not valid!")
      .required("E-mail is required!"),
    password: Yup.string()
      .min(8, "Password has to be longer than 6 characters!")
      .required("Password is required!"),
    rememberMe: Yup.boolean(),
  });
};
export default SignInValidationSchema;
