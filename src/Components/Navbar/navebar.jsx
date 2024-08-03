import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/blackSuperBike.png";
import cartIcon from "../Assets/cartblue.png"; 
import './navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt='Logo' />
                <p>Shoppers</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("Home")}>
                    <Link style={{ textDecoration: "none" }} to="/">Home{menu === "Home" && <hr />}</Link>
                </li>
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: "none" }} to="/shop">Shop{menu === "shop" && <hr />}</Link>
                </li>
                <li onClick={() => setMenu("contact")}>
                    <Link style={{ textDecoration: "none" }} to="/contact">Contact{menu === "contact" && <hr />}</Link>
                </li>
            </ul>
            <div className="nav-login-cart">
               <Link to="/login"><button>Login</button></Link> {/* Corrected path */}
               <Link to="/cart"><img src={cartIcon} alt='Cart' /></Link>
            </div>
        </div>
    );
}

export default Navbar;
