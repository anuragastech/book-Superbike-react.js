import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/blackSuperBike.png";
import cartIcon from "../Assets/cartblue.png";

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    return (
        <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-100 shadow-md">
            <div className="flex items-center mb-2 md:mb-0">
                <img src={logo} alt='Logo' className="h-10 mr-3" />
                <p className="text-2xl font-bold text-gray-800">Shoppers</p>
            </div>
            <ul className="flex flex-wrap items-center space-x-4 mb-2 md:mb-0">
                <li className="relative">
                    <Link
                        to="/"
                        onClick={() => setMenu("Home")}
                        className={`text-lg font-medium transition-colors duration-300 ease-in-out ${menu === "Home" ? 'text-blue-500 underline' : 'text-gray-800 hover:text-blue-500'}`}
                    >
                        Home
                    </Link>
                </li>
                <li className="relative">
                    <Link
                        to="/shop"
                        onClick={() => setMenu("shop")}
                        className={`text-lg font-medium transition-colors duration-300 ease-in-out ${menu === "shop" ? 'text-blue-500 underline' : 'text-gray-800 hover:text-blue-500'}`}
                    >
                        Shop
                    </Link>
                </li>
                <li className="relative">
                    <Link
                        to="/contact"
                        onClick={() => setMenu("contact")}
                        className={`text-lg font-medium transition-colors duration-300 ease-in-out ${menu === "contact" ? 'text-blue-500 underline' : 'text-gray-800 hover:text-blue-500'}`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <Link to="/login">
                    <button className="px-4 py-2 text-base border border-gray-300 rounded-md bg-gray-600 text-white transition-colors duration-300 ease-in-out hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300">
                        Login
                    </button>
                </Link>
                <Link to="/cart">
                    <img src={cartIcon} alt='Cart' className="h-10 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
