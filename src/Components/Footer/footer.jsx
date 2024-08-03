import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-section about'>
                    <h3>About Us</h3>
                    <p>
                        We are a team of passionate developers building amazing web applications. Our mission is to deliver high-quality products to our clients.
                    </p>
                </div>
                <div className='footer-section links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/shop'>Shop</a></li>
                        <li><a href='/contact'>Contact</a></li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </div>
                <div className='footer-section contact'>
                    <h3>Contact Us</h3>
                    <p>Email: info@shoppers.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className='footer-section social'>
                    <h3>Follow Us</h3>
                    <div className='social-links'>
                        <a href='#'><i className='fab fa-facebook'></i></a>
                        <a href='#'><i className='fab fa-twitter'></i></a>
                        <a href='#'><i className='fab fa-instagram'></i></a>
                        <a href='#'><i className='fab fa-linkedin'></i></a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                &copy; {new Date().getFullYear()} Shoppers. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
