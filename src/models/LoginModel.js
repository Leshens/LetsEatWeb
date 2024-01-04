import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const LoginModel = {
  signInWithEmailAndPassword: async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  },

  signInWithPopup: async () => {
    return signInWithPopup(auth, provider);
  },
};

export default LoginModel;
