import React from 'react';
import Pug from '../assets/pug.jpg';

const Chats = () => {
  return (
    <div>
      <div className="user-chat">
        <img src={Pug} alt="" />
        <div className="user-chat-info">
          <span>Ron</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={Pug} alt="" />
        <div className="user-chat-info">
          <span>Ron</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="user-chat">
        <img src={Pug} alt="" />
        <div className="user-chat-info">
          <span>Ron</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
