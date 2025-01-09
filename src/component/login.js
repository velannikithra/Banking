import React, { useState } from 'react';
import './login.css';

const Login = () => {
  // State to hold form values and error messages
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function for onBlur
  const validate = (field) => {
    let errorMessage = '';
    switch (field) {
      case 'username':
        if (!username) {
          errorMessage = 'Username is required';
        }
        break;
      case 'email':
        if (!email) {
          errorMessage = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errorMessage = 'Please enter a valid email';
        }
        break;
      case 'password':
        if (!password) {
          errorMessage = 'Password is required';
        } else if (password.length < 6) {
          errorMessage = 'Password must be at least 6 characters';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  }
  return (
   <>
   
   <div className="containers">
    
        <form action="/onlineservice" id="form">
            <h3 className='forms'>Login to your online banking</h3>
            <div className="input-group">
                <label for="username">Username</label>
               <input type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            onBlur={() => validate('username')}/>
          {errors.username && <div className="error">{errors.username}</div>}
           </div>
            <div className="input-group">
                <label for="email">Email</label>
                <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={() => validate('email')}
          />
          {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={() => validate('password')}
          />
          {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    

    </>
  );
}
  

export default Login;

