import '../App.css';
import logo from '../img/logoLE2.png';
import signgoogle from '../img/signWITHgoogle.png';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../schemas/loginSchema';

const Signup = () => {
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

  const handleClick = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/RestaurantForm');
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

          <button type='submit' className='signup-button bg-primary text-black lg:px-16 md:px-10 sm:px-10 sx:px-10   lg:p-4 md:p-3 sm:p-3 sx:p-3   lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold'>
            Signup
          </button>

          {/* przerwa */}
          <div className="h-4 w-16"></div>

          <button onClick={handleClick}>
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

export default Signup;
