import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../workingFiles/AuthForm";
import "./componentStyles/Navbar.css";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>
          <Link to="/">
            <img src="./images/pokeMartLogoBandW.png" height="70px" />
          </Link>
        </h2>
      </div>
      <Link to="/">
        <img src="./images/Pikachu.png" height="60px" width="30px" />
      </Link>
      <div className="navbar__authform">
        <AuthForm />
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
