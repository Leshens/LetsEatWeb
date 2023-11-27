import '../App.css';
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
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="login-form">
          <div>
            <label htmlFor="email">Your Email</label>
            <Field type="email" id="email" name="email" required />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="password">Your Password</label>
            <Field type="password" id="password" name="password" required />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </Form>
      </Formik>
      <button onClick={handleClick}>Sign in with Google</button>
      <p>
        Need to Signup? <Link to="/SignUp">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
