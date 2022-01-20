// import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import { withRouter, Route, Switch, Redirect } from "react-router-dom";
// import { Login, Signup } from "./components/AuthForm";
// import Home from "./components/Home";
// import { me } from "./store";
// import AllBalls from "./components/AllBalls";

// /**
//  * COMPONENT
//  */
// class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData();
//   }

//   render() {
//     const { isLoggedIn } = this.props;

//     return (
//       <div>
//         {isLoggedIn ? (
//           <Switch>
//             <Route path="/home" component={Home} />

//             <Route path="/pokeballs" component={AllBalls} />
//           </Switch>
//         ) : (
//           <Switch>
//             <Route path="/" exact component={Login} />
//             <Route path="/login" component={Login} />
//             <Route path="/signup" component={Signup} />
//             <Route path="/pokeballs" component={AllBalls} />
//           </Switch>
//         )}
//       </div>
//     );
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = (state) => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
//     // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
//     isLoggedIn: !!state.auth.id,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes));

// import React from "react";
// import {
//   BrowserRouter as Router,
//   NavLink,
//   Route,
//   Switch,
// } from "react-router-dom";

// // import HomePage from "./HomePage";
// import AllBalls from "./AllBalls";
// import SinglePage from "./SinglePage";

// const Routes = () => {
//   return (
//     <Router>
//       <div>
//         {/* <nav className="nav">
//           <NavLink className="navBarLink" to="/">
//             Home
//           </NavLink>
//           <NavLink className="navBarLink" to="/campuses">
//             Campuses
//           </NavLink>
//           <NavLink className="navBarLink" to="/students">
//             Students
//           </NavLink>
//         </nav> */}

//         <Switch>
//           <Route exact path="/" component={AllBalls} />
//           <Route exact path="/singlepage" component={SinglePage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default Routes;
