import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModel from '../models/LoginModel';
import LoginView from '../views/LoginView'

const LoginController = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const userCredential = await LoginModel.signInWithEmailAndPassword(values.email, values.password);
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

  const handleGoogleClick = async () => {
    try {
      const userCredential = await LoginModel.signInWithPopup();
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

  return <LoginView onSubmit={handleSubmit} onGoogleClick={handleGoogleClick} />;
};

export default LoginController;
