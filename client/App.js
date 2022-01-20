import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Views
import HomeScreen from './views/HomeScreen';
import ProductScreen from './views/ProductScreen';
import CartScreen from './views/CartScreen';
import CheckoutPage from './views/CheckoutPage';

// Components
import Navbar from './components/Navbar.js';
import Backdrop from './components/Backdrop.js';
import SideDrawer from './components/SideDrawer.js';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={CartScreen} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
