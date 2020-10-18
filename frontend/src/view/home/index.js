import React from 'react';
import Navbar from '../../components/navbar'
import Home from '../../components/home'

const inicio = () => {
  return (
    <div className="container">
      <Navbar/>
      <Home />
    </div>
  );
};

export default inicio;