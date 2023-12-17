import '../App.css';
import logo from '../img/logoLE2.png';
import signgoogle from '../img/signWITHgoogle.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../schemas/loginSchema';

const Login = () => {
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
    <div className="flex flex-col flex-nowrap items-center justify-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
       
        <Form className="login-form">

        {/* przerwa */}
        <div className="h-4 w-10"></div>

          {/* logo */}
        <a href = "/">
        <img src={logo} className="h-52 w-52" alt="logo"/> 
        </a>

        {/* przerwa */}
        <div className="h-10 w-10"></div>

          <div>
            <Field type="email" id="email" name="email" placeholder="email" className="text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-2 focus:shadow-primaryShadow" required />
            <ErrorMessage name="email" component="div" className="error-message text-primary" />
          </div>

          {/* pasek szary */}
          <div className="bg-secondary h-0.5 w-52 "></div>

          <br></br>

          <div>
            <Field type="password" id="password" name="password" placeholder="password" className="text-xl w-52 focus:outline-none focus:outline-offset-0 focus:border-primary focus:border-2 focus:shadow-primaryShadow" required />
            <ErrorMessage name="password" component="div" className="error-message text-primary" />
          </div>

          {/* pasek szary */}
          <div className="bg-secondary h-0.5 w-52 "></div>

          {/* przerwa */}
          <div className="h-10 w-16"></div>

          <button type="submit" className="login-button bg-primary hover:bg-teal-500 text-black  px-20 p-4 w-52  lg:text-xl md:text-lg sm:text-lg sx:text-lg rounded-full font-extrabold">
            Login
          </button>

          {/* przerwa */}
          <div className="h-4 w-16"></div>

          <button onClick={handleClick}>
          <img src={signgoogle} className="h-14 w-52" alt="signgoogle" />
          </button>

          {/* przerwa */}
          <div className="h-4 w-16"></div>

        <div className='text-center'>
          Need to Signup?
          <br></br>
          <Link to="/SignUp" className="text-black hover:text-primary font-extrabold">Create Account</Link>
        </div>

        {/* przerwa */}
        <div className="h-10 w-10"></div>

        </Form>
      </Formik>

    </div>
  );
};

export default Login;
