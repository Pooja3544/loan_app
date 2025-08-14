// Login.jsx
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [cred, setCred] = useState({ employee: '', password: '' });
  const handleChange = e => setCred({ ...cred, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // placeholder API call
    alert(`Logging in ${cred.employee}`);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Employee Login</h2>
        <input name="employee" placeholder="Employee Name" value={cred.employee} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={cred.password} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
