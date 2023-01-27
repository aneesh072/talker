import React from 'react';
import Add from '../assets/add.png';

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo"> Talker</span>
        <span className="title"> Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email.." />
          <input type="password" placeholder="Password.." />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add profile picture</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>
          Have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
