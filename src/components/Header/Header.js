import React, { useState } from "react";
import "./Header.css";
import cartIcon from "../../images/icon-cart1.svg";
import avatar from "../../images/image-avatar.png";
import menu from "../../images/icon-menu.svg";
import close from '../../images/icon-close.svg'
import Cart from "../Cart/Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleCart = (e) => {
    setShowCart((prev) => !prev);
  };
  const toggleMenu = (e) => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="header-div">
      <div className="header">
        <h2>sneakers</h2>
        <img src={showMenu ? close : menu} className="menu-icon" onClick={toggleMenu} />
        <div className={`menu ${showMenu ? "active" : ""}`}>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="cart-div">
          <img src={cartIcon} onClick={toggleCart} />
          <img src={avatar} />
        </div>
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default Header;
