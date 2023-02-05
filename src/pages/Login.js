import React, { useState } from 'react';
import Add from '../assets/add.png';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo"> Talker</span>
        <span className="title"> Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email.." />
          <input type="password" placeholder="Password.." />
          <input style={{ display: 'none' }} type="file" id="file" />

          <button>Login</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Don't have an account? <Link to={'/register'}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
