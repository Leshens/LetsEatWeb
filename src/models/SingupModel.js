import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const SignupModel = {
  createUserWithEmailAndPassword: async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  },

  signInWithPopup: async () => {
    return signInWithPopup(auth, provider);
  },
};

export default SignupModel;
