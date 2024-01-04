// SignupController.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupModel from '../models/SingupModel';
import SignupView from '../views/SignupView';

const SignupController = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const userCredential = await SignupModel.createUserWithEmailAndPassword(values.email, values.password);
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
      const userCredential = await SignupModel.signInWithPopup();
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

  return <SignupView onSubmit={handleSubmit} onGoogleClick={handleGoogleClick} />;
};

export default SignupController;
