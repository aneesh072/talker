import React from 'react';
import Pug from '../assets/pug.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img src={Pug} alt="" />
        <span>Enis</span>
      </div>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  );
};

export default Navbar;
