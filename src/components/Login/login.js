import React from 'react';
import { Button } from '@mui/material';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import './login.css';
import { useStateValue } from '../ContextApi/StateProvider';
import { actionTypes } from '../ContextApi/reducer';

const Login = () => {
  const [state, dispatch] = useStateValue();

  console.log(state);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-pic-0.png"
          alt="logo"
        />
        <div className="login__text">
          <h1>Sign in to whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
