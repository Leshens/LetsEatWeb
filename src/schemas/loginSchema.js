import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string()      
    .email("Niepoprawny format maila")
    .required("Wprowadź mail"),
    password: yup
    .string()
    .required('Wprowadź hasło')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Hasło ma zawierać 8 znaków"),
})