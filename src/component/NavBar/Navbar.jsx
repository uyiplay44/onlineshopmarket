import React, { useState } from "react";
import Logo from "../../assests/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <div className="NavContainer">
      <div className="NavLink">
        <div className="NavLogo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className={show ? "Nav active" : "Nav"}>
          <Link to="/Men" className="link">
            Men
          </Link>
          <Link to="/Women" className="link">
            Women
          </Link>
          <Link to="/ItemCollection" className="link">
            Collection
          </Link>
          <Link to="/Lookbook" className="link">
            Lookbook
          </Link>
          <Link to="/Sale" className="link">
            Sale
          </Link>
        </ul>
      </div>

      <div className="NavSection">
        <ul className="NavSec">
          <Link to="/OutStory" className="link2">
            Our Story
          </Link>
          <Link to="/Contact" className="link2">
            Contact
          </Link>
        </ul>
        <div className="NavIco">
          <FaShoppingCart className="cart" />
          <FaUser className="user" />
        </div>
      </div>
      <div className="hamburgerMenu" onClick={handleClick}>
        <AiOutlineMenu />
      </div>
    </div>
  );
}

export default Navbar;
