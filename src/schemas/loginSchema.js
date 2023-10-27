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
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
})