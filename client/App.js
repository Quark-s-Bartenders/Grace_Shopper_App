/* eslint-disable no-unused-vars */
import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';
import Home from './components/HomePage';
import SinglePage from './components/SinglePage';

// TEST COMPONENT IMPORT
import TestProductHome from './components/TestProductHome';

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Home />
      <Routes /> */}
      <TestProductHome />
    </div>
  );
};

export default App;
