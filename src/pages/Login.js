import React from 'react';
import Add from '../assets/add.png';

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo"> Talker</span>
        <span className="title"> Login</span>
        <form>
          <input type="email" placeholder="Email.." />
          <input type="password" placeholder="Password.." />
          <input style={{ display: 'none' }} type="file" id="file" />

          <button>Login</button>
        </form>
        <p>
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
