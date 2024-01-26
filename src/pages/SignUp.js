import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import '../App.css';
import logo from '../img/logoLE2.png';
import signgoogle from '../img/signWITHgoogle.png';

// View
const SignupView = ({ onSubmit, onGoogleSignIn, errorMessage }) => (
  <div className="flex flex-col flex-nowrap items-center justify-center">
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      <Form className='signup-form'>
        {/* przerwa */}
        <div className="h-4 w-10"></div>
        {/* logo */}
        <a href = "/">
          <img src={logo} className="h-52 w-52" alt="logo" />
        </a>

        {/* przerwa */}
        <div className="h-10 w-10"></div> 

        <div>
          <Field
            type='email'
            id='email'
            name='email'
            placeholder="Input email" 
            className="bg-transparent text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3 focus:rounded focus:shadow-primaryShadow"
            required
          />
          <ErrorMessage name='email' component='div' className='error-message text-primary' />
        </div>

        {/* pasek szary */}
        <div className="bg-secondary h-0.5 w-52 "></div>

        <br></br>

        <div>
          <Field
            type='password'
            id='password'
            name='password'
            placeholder="Input password" 
            className="bg-transparent text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-3 focus:rounded focus:shadow-primaryShadow"
            required
          />
          <ErrorMessage name='password' component='div' className='error-message text-primary' />
          <div className="error-message text-red-500 font-bold">
            {errorMessage.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>

        {/* pasek szary */}
        <div className="bg-secondary h-0.5 w-52 "></div>

        {/* przerwa */}
        <div className="h-10 w-16"></div>

        <button type='submit' className='signup-button bg-primary hover:bg-teal-500 text-black px-16 p-4  w-52 text-center  lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold'>
          Signup
        </button>

        {/* przerwa */}
        <div className="h-4 w-16"></div>

        <button onClick={onGoogleSignIn}>
          <img src={signgoogle} className="h-14 w-52" alt="signgoogle" />
        </button>

        {/* przerwa */}
        <div className="h-4 w-16"></div>

        <p className='text-center'>
          Need to Login? 
          <br></br>
          <Link to='/Login' className="text-black hover:text-primary font-extrabold">Login</Link>
        </p>

        {/* przerwa */}
        <div className="h-10 w-10"></div>

      </Form>
    </Formik>
  </div>
);

// Presenter
const SignupPresenter = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const splitErrorMessage = (message) => {
    const maxWordsPerLine = 4;
    const words = message.split(' ');
    const lines = [];

    for (let i = 0; i < words.length; i += maxWordsPerLine) {
      const line = words.slice(i, i + maxWordsPerLine).join(' ');
      lines.push(line);
    }

    return lines.join('\n');
  };

  const handleSubmit = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      localStorage.setItem('token', user.uid);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/RestaurantForm');
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        const formattedErrorMessage = splitErrorMessage('Ten email jest już używany');
        setErrorMessage(formattedErrorMessage);
      } else {
        const formattedErrorMessage = splitErrorMessage('Wystąpił błąd: ' + error.message);
        setErrorMessage(formattedErrorMessage);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      localStorage.setItem('token', user.uid);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/RestaurantForm');
    } catch (error) {
      console.error(error);
      setErrorMessage('Wystąpił błąd: ' + error.message);
    }
  };

  return (
    <SignupView onSubmit={handleSubmit} onGoogleSignIn={handleGoogleSignIn} errorMessage={errorMessage} />
  );
};

export default SignupPresenter;
