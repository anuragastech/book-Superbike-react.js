import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/background-image.jpg')" }}>
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full backdrop-blur-sm">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Create an Account</h1>
                <p className="text-gray-600 mb-6">Fill in the form below to sign up.</p>
                <form>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your full name" required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <button type="submit" className="w-full py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md transition duration-300 hover:bg-green-600 transform hover:translate-y-[-2px]">Sign Up</button>
                    <p className="mt-6 text-sm text-gray-700">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
