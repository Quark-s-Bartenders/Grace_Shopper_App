import React from "react";
import { Link } from "react-router-dom";
import "./componentStyles/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>PokéMart</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{cartItems.length}</span>
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
