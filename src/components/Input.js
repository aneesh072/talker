import React from 'react';
import Add from '../assets/image.png';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type a message..." />
      <div className="send">
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src={Add} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
