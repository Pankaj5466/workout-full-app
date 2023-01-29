import React, { useState } from 'react';
import backendServer from '../api/axios-setup';
import { LOGIN_URL } from '../api/url-constant';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to send email and password to the server for authentication goes here

    backendServer.post(LOGIN_URL,{
      email,
      password
    }).then(resposne =>{
      console.log('Login Successful');
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
