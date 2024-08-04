import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-6">
                    <h3 className="text-xl font-bold mb-4">About Us</h3>
                    <p className="text-gray-400">
                        We are a team of passionate developers building amazing web applications. Our mission is to deliver high-quality products to our clients.
                    </p>
                </div>
                <div className="w-full md:w-1/4 mb-6">
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                        <li><a href="/shop" className="text-gray-300 hover:text-white">Shop</a></li>
                        <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                        <li><a href="/login" className="text-gray-300 hover:text-white">Login</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-6">
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-400">Email: info@shoppers.com</p>
                    <p className="text-gray-400">Phone: (123) 456-7890</p>
                </div>
                <div className="w-full md:w-1/4 mb-6">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 text-center py-4 mt-8">
                &copy; {new Date().getFullYear()} Shoppers. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
