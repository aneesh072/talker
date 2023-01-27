import React from 'react';
import Pug from '../assets/pug.jpg';

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Search user.." />
      </div>
      <div className="user-chat">
        <img src={Pug} alt="" />
        <div className="user-chat-info">
          <span>Ron</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
