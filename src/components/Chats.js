import React from 'react';
import Pug from '../assets/pug.jpg';

const Chats = () => {
  return (
    <div>
      <div className="user-chat">
        <img src={Pug} alt="" />
        <div className="user-chat-info">
          <span>Ron</span>
          <span className="p">Last meassgae</span>
        </div>
      </div>

      <div className="user-chat">
        <img src={Pug} alt="" />
        <div className="user-chat-info">
          <span>Ron</span>
          <span className="p">Last meassgae</span>
        </div>
      </div>

      <div className="user-chat">
        <img src={Pug} alt="" />
        <div className="user-chat-info">
          <span>Ron</span>
          <span className="p">Last meassasdasda asd asd asdgae</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
