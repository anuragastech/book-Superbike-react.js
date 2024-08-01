import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/blackSuperBike.png";
import cartIcon from "../Assets/cartIn.png"; 
import './navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt='Logo' />
                <p>Shoppers</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link style={{textDecoration:"none"}} to="/">Shop {menu === "shop" && <hr />}</Link>
                </li>
                <li onClick={() => setMenu("contact")}>
                    <Link style={{textDecoration:"none"}} to="/contact">Contact {menu === "contact" && <hr />}</Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cartIcon} alt='Cart' />
            </div>
        </div>
    );
}

export default Navbar;
