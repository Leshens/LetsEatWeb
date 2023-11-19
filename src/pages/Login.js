import '../App.css';
import logo from '../img/logoLE2.png';
import { Form, Formik } from "formik";
//import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useContext, useState} from "react";
import {LogInContext} from '../context/LogInContext'
import {loginSchema} from '../schemas/loginSchema'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () =>{
  const initialValues={
    email: "",
    password: ""
  }
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate();
  // const handleSubmit= async (e) =>{
  //   e.preventDefault();
  //   try {
  //     const userCredendials = await signInWithEmailAndPassword(auth,email,password);
  //     const user = userCredendials.user;
  //     localStorage.setItem('token', user.accessToken)
  //     localStorage.setItem('user', JSON.stringify(user))
  //     navigate("/orders");
  //   } catch(error){
  //     if (error.response) {
  //         console.log(error.response);
  //         //resetForm();
  //         alert("Username or login is invalid")
  //     } else if (error.request) {
  //         console.log("network error");
  //     } else {
  //         console.log(error);
  //     }
  //   }
  // }

  return (
    <div className="login">
      <Formik
          validationSchema={loginSchema}
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
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
                handleSubmit= async (e) =>{
                    e.preventDefault();
                    try {
                      const userCredendials = await signInWithEmailAndPassword(auth,email,password);
                      const user = userCredendials.user;
                      localStorage.setItem('token', user.accessToken)
                      localStorage.setItem('user', JSON.stringify(user))
                      navigate("/orders");
                    } catch(error){
                      if (error.response) {
                          console.log(error.response);
                          //resetForm();
                          alert("Username or login is invalid")
                      } else if (error.request) {
                          console.log("network error");
                      } else {
                          console.log(error);
                      }
                    }
                  },
                resetForm
              }
            ) => (
                    <div className="#overlayDiv flex flex-col items-center justify-center">

                      <div className="form"> 

                    {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                        <Form noValidate onSubmit={handleSubmit}>

                            {/* logo */}
                            <img src={logo} className="h-52" alt="logo" /> 

                             {/* przerwa */}
                          <div className="h-10 w-10">
                          </div>

                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="E-mail"
                            className="form-control inp_text text-xl"
                            id="email"
                          />

                          <div className="bg-secondary h-0.5 w-3/4 "></div>

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
                            placeholder="password"
                            className="form-control text-xl"
                          />

                          <div className="bg-secondary h-0.5 w-3/4 "></div>

                          {/* If validation is not passed show errors */}
                          {errors.password && touched.password ? (<p className="form-text error">{errors.password}</p>) : null}
                          {/* Click on submit button to submit the form */}
                          <br></br>

                          {/* przerwa */}
                          <div className="h-16 w-16">
                          </div>

                          <a href="AdminMenu">
                          <button type= "button" class="bg-primary text-black lg:px-12 md:px-10 sm:px-10 sx:px-10   lg:p-4 md:p-3 sm:p-3 sx:p-3   lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold ">ZALOGUJ SIE</button>
                          </a>
                          
                        </Form>
                      </div>
                    </div>
            )
          } 
      </Formik>
    </div>
  );
}
export default Login;
/*<button //disabled={isSubmitting}type="submit"></button>*/