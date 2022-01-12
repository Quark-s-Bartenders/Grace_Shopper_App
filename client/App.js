
/* eslint-disable no-unused-vars */
import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Home from "./components/HomePage";
import SinglePage from "./components/SinglePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Routes />
    </div>
  );
};

export default App;
