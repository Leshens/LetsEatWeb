import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string()      
    .email("Invalid email format")
    .required("Mail is required"),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must contain 8 Characters with different attributes"),
})