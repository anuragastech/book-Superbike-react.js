import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/background-image.jpg')" }}>
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full backdrop-blur-sm">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
                <form>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" name="email" required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input type="password" id="password" name="password" required className="w-full p-3 text-lg border border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <button type="submit" className="w-full py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md transition duration-300 hover:bg-green-600 transform hover:translate-y-[-2px]">Login</button>

                    <div className="mt-6 text-center text-sm text-gray-700">
                        If you are not a user! <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
