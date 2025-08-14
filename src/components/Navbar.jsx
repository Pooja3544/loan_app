import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/eagle-logo.jpg';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-left">
      <img src={logo} alt="Eagle Finserve Logo" className="company-logo" />
    </div>

    <div className="nav-center">
      <div className="dropdown">
        <span className="nav-item">Home Loan</span>
        <div className="dropdown-menu">
          <p>• Home Purchase Loan</p>
          <p>• Home Construction Loan</p>
          <p>• Home Renovation Loan</p>
          <p>• Home Extension Loan</p>
          <p>• Land Purchase Loan</p>
          <p>• Top-Up Loan</p>
        </div>
      </div>

      <div className="dropdown">
        <span className="nav-item">Personal Loan</span>
        <div className="dropdown-menu">
          <p>• Travel Loan</p>
          <p>• Marriage Loan</p>
          <p>• Medical Loan</p>
          <p>• Education Loan</p>
        </div>
      </div>

      <div className="dropdown">
        <span className="nav-item">Business Loan</span>
        <div className="dropdown-menu">
          <p>• Term Loan</p>
          <p>• Working Capital Loan</p>
          <p>• MSME Loan</p>
          <p>• Machinery Loan</p>
          <p>• Franchise Loan</p>
        </div>
      </div>
    </div>

    <div className="nav-right">
      <Link to="/login"><button className="login-btn">Login</button></Link>
    </div>
  </nav>
);

export default Navbar;
