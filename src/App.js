import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  console.log(process.env);
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
