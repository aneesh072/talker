import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="message owner">
{/*       <div className="message-info">
        <img
          src="https://cdn.pixabay.com/photo/2018/02/12/07/49/mammal-3147633__480.jpg"
          alt=""
        />
        <span>Hello now</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        <img
          src="https://cdn.pixabay.com/photo/2018/02/12/07/49/mammal-3147633__480.jpg"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Message;
