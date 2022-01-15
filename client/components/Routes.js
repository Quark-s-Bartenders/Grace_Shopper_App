import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import TestButton from "./TestComponent";
import AllBalls from "./AllBalls";

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/testbutton"
            render={() => (
              <div>
                <TestButton />
              </div>
            )}
          />

          <Route
            exact
            path="/allballs"
            render={() => (
              <div>
                <AllBalls />
              </div>
            )}
          />

          {/*
          <Route exact path="/testbutton" component={TestButton} />
          <Route exact path="/allballs" component={AllBalls} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
