import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../schemas/loginSchema';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
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
      <h1>Signup Page</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className='signup-form'>
          <div>
            <label htmlFor='email'>Your Email</label>
            <Field
              type='email'
              id='email'
              name='email'
              required
            />
            <ErrorMessage name='email' component='div' className='error-message' />
          </div>
          <div>
            <label htmlFor='password'>Your Password</label>
            <Field
              type='password'
              id='password'
              name='password'
              required
            />
            <ErrorMessage name='password' component='div' className='error-message' />
          </div>
          <button type='submit' className='signup-button'>
            Signup
          </button>
        </Form>
      </Formik>
      <p>
        Need to Login? <Link to='/Login'>Login</Link>
      </p>
    </div>
  );
};

export default Signup;
