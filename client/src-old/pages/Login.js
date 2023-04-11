import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import backendServer from '../api/axios-setup';
import { LOGIN_URL } from '../api/url-constant';
import { useDispatch } from '../hooks-store/store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to send email and password to the server for authentication goes here

    backendServer.post(LOGIN_URL,{
      email,
      password
    }).then(resposne =>{
      console.log(resposne.data);
      dispatch('SET_TOKEN',resposne.data.token);

      navigate('/');
    }).catch(e =>{
      console.log('Login Failed');
      console.log(e);
    })


  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
