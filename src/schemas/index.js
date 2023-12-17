import * as yup from "yup";

export const basicSchema = yup.object().shape({
    email: yup.string()      
    .email("Invalid email format")
    .required("Mail is required"),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must contain 8 Characters with different attributes"
    ),
    firstName: yup.string()
    .required("Required")
      .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Please enter valid name')
      .max(40),
    middleName: yup.string()
    .required("Required")
      .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Please enter valid name')
      .max(40),
    lastName:  yup.string()
    .required("Required")
      .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-\/.]+$/, 'Please enter valid name')
      .max(40),
    //mobileNumber: yup.string().phone(), TO FIX???
    admin: yup.string()
    .required("required")
    .oneOf(["true","false"]),
    chef: yup.string()
    .required("required")
    .oneOf(["true","false"]),
    waiter: yup.string()
    .required("required")
    .oneOf(["true","false"]),
    quatermaster: yup.string()
    .required("required")
    .oneOf(["true","false"]),

})