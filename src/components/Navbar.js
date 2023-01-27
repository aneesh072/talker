import React from 'react';
import Pug from '../assets/pug.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img src={Pug} alt="" />
        <span>Enis</span>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default Navbar;
