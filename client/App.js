import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';
import TestComponent from './components/TestComponent';

const App = () => {
  return (
    <div>
      <Navbar />
      <TestComponent />
      <Routes />
    </div>
  );
};

export default App;
