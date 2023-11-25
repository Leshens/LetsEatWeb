import '../App.css';
//import logo from '../img/logoLE2.png';
import { Link,useNavigate } from 'react-router-dom';
import {useState} from "react";
//import {loginSchema} from '../schemas/loginSchema'
import { auth,provider } from '../firebase';
import { signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/AdminMenu");
    } catch (error) {
      console.error(error);
      console.log(error.code);
      console.log(error.message);
    }
  }
    const handleClick = async (e) =>{
      e.preventDefault();
      try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/AdminMenu");
      } catch (error) {
        console.error(error);
        console.log(error.code);
        console.log(error.message);
      }
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='login-button'>Login</button>
      </form>
      <button onClick={handleClick}>Signin with Google</button>
      <p>Need to Signup? <Link to="/SignUp">Create Account</Link></p>
    </div>
  )
}
export default Login