import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo-container">
          <img src="/logo.jpg" alt="Apollo 24/7 Logo" className="header-logo" />
          <div className="header-location">
            <span role="img" aria-label="location">📍</span>
            <span>Select Address</span>
            <span>▼</span>
          </div>
        </div>
        <div className="header-search">
          <span role="img" aria-label="search">🔍</span>
          <input
            type="text"
            placeholder="Search Doctors, Specialties, Conditions etc."
          />
        </div>
        <button className="header-login">
          Login
          <span role="img" aria-label="user">👤</span>
        </button>
      </div>
      <div className="header-bottom">
        <nav className="header-nav">
          <a href="#">Buy Medicines</a>
          <Link href="/doctors">Find Doctors</Link>
          <a href="#">Lab Tests</a>
          <a href="#">Circle Membership</a>
          <a href="#">Health Records</a>
          <a href="#">Diabetes Reversal</a>
          <div className="header-nav-item">
            <a href="#">Buy Insurance</a>
            <span className="header-nav-new">New</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;