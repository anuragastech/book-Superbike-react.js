import React from 'react';
import './login.css'; // Import the CSS file for styling

const Login = () => {
    return (
        <div className='login-page'>
            <div className='login-container'>
                <h1>Login</h1>
                <form>
                  
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' required />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
