import * as Yup from "yup";

const RegisterFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, 'Password is too short')
    .max(100, 'Password is too long')
    .required("Required"),

  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ).required('Required')
});

export default RegisterFormSchema;
