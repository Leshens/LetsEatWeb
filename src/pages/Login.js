import '../App.css';
import logo from '../img/logoLE2.png';
import signgoogle from '../img/signWITHgoogle.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../schemas/loginSchema';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/AdminMenu');
    } catch (error) {
      console.error(error);
      console.log(error.code);
      console.log(error.message);
    }
  };

  const handleClick = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/AdminMenu');
    } catch (error) {
      console.error(error);
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
       
        <Form className="login-form">

          {/* logo */}
        <img src={logo} className="h-52" alt="logo"/> 

        {/* przerwa */}
        <div className="h-10 w-10"></div>

          <div>
            <Field type="email" id="email" name="email" placeholder="email" className="text-xl" required />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          {/* pasek szary */}
          <div className="bg-secondary h-0.5 w-3/4 "></div>

          <br></br>

          <div>
            <Field type="password" id="password" name="password" placeholder="password" className="text-xl" required />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          {/* pasek szary */}
          <div className="bg-secondary h-0.5 w-3/4 "></div>

          {/* przerwa */}
          <div className="h-10 w-16"></div>

          <button type="submit" className="login-button bg-primary text-black lg:px-20 md:px-10 sm:px-10 sx:px-10   lg:p-4 md:p-3 sm:p-3 sx:p-3   lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold">
            Login
          </button>

          {/* przerwa */}
          <div className="h-4 w-16"></div>

          <button onClick={handleClick}>
          <img src={signgoogle} className="h-14" alt="signgoogle" />
          </button>

          {/* przerwa */}
          <div className="h-4 w-16"></div>

        <p>
          Need to Signup? 
          <br></br>
          <Link to="/SignUp" className="text-black font-extrabold">Create Account</Link>
        </p>

        </Form>
      </Formik>

    </div>
  );
};

export default Login;
