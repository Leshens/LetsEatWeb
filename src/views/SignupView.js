import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import logo from '../img/logoLE2.png';
import signgoogle from '../img/signWITHgoogle.png';
import { Link } from 'react-router-dom';

const SignupView = ({ onSubmit, onGoogleClick }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        <Form className='signup-form'>
          {/* logo */}
          <img src={logo} className="h-52" alt="logo" />

          {/* przerwa */}
          <div className="h-10 w-10"></div>

          <div>
            <Field
              type='email'
              id='email'
              name='email'
              placeholder="Input email" 
              className="text-xl"
              required
            />
            <ErrorMessage name='email' component='div' className='error-message' />
          </div>

          {/* pasek szary */}
          <div className="bg-secondary h-0.5 w-3/4 "></div>

          <br></br>

          <div>
            <Field
              type='password'
              id='password'
              name='password'
              placeholder="Input password" 
              className="text-xl"
              required
            />
            <ErrorMessage name='password' component='div' className='error-message' />
          </div>

          {/* pasek szary */}
          <div className="bg-secondary h-0.5 w-3/4 "></div>

          {/* przerwa */}
          <div className="h-10 w-16"></div>

          <button type='submit' className='signup-button bg-primary text-black lg:px-16 md:px-10 sm:px-10 sx:px-10 lg:p-4 md:p-3 sm:p-3 sx:p-3 lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold'>
            Signup
          </button>

          {/* przerwa */}
          <div className="h-4 w-16"></div>

          <button onClick={onGoogleClick}>
            <img src={signgoogle} className="h-14" alt="signgoogle" />
          </button>

          {/* przerwa */}
          <div className="h-4 w-16"></div>

          <p>
            Need to Login? 
            <br></br>
            <Link to='/Login' className="text-black font-extrabold">Login</Link>
          </p>

        </Form>
      </Formik>
    </div>
  );
};

export default SignupView;
