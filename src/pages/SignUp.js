import { Form, Formik } from "formik";
//import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useContext} from "react";
import {LogInContext} from '../context/LogInContext'
import {loginSchema} from '../schemas/loginSchema'

export default function SignUp() {
  const {setUserName} = useContext(LogInContext);
  const {setIsLogged} = useContext(LogInContext);
  const {setIsAdmin} = useContext(LogInContext);
  const navigate = useNavigate();
const initialValues={
  email: "",
  password: ""
}

  return (
    <div className="SignUp">
      <Formik
          validationSchema={loginSchema}
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            await axios.get(`http://localhost:8080/${values.email}`)
                .then((response) => {
                      if(response.data.password !== values.password){
                        resetForm();
                        alert("Username or login is invalid");
                      }
                      else{
                        setUserName(response.data.firstName);
                        setIsLogged(true);
                        console.log(response.data.admin)
                        setIsAdmin(response.data.admin)
                        navigate("/RestaurantForm");
                      }
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response);
                        resetForm();
                        alert("Username or login is invalid")
                    } else if (error.request) {
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                });
          }}
      >
          { (
              {
                values,
                errors,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                resetForm
              }
            ) => (
                    <div className="#overlayDiv">
                      <div className="form">
                    {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                        <Form noValidate onSubmit={handleSubmit}>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="adres e-mail"
                            className="form-control inp_text"
                            id="email"
                          />
                          {/* If validation is not passed show errors */}
                          {errors.email && touched.email ? (<p className="form-text error">{errors.email}</p>) : null}
                          {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                          <br></br>
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Enter password"
                            className="form-control"
                          />
                          {/* If validation is not passed show errors */}
                          {errors.password && touched.password ? (<p className="form-text error">{errors.password}</p>) : null}
                          {/* Click on submit button to submit the form */}
                          <br></br>
                          <button disabled={isSubmitting} type="submit">
                            Zarejestruj się
                          </button>
                        </Form>
                        <p>Masz już konto?</p>
                        <a href="Login">Zaloguj się</a>
                      </div>
                    </div>
            )
          } 
      </Formik>
    </div>
  );
}