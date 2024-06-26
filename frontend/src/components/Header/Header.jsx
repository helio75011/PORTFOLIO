// Header.js
import React, { useState } from 'react';
import './Header.css'; // Only if you're using a separate CSS file
import Logo from './uploads/Profile.jpg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          <img src={Logo} alt="Logo"/>
        </a>
        <button className="menu-icon" onClick={toggleSidebar}>
          ☰
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div>
            <div className='sidebar-mobile'>
              <button className="menu-icon" onClick={toggleSidebar}>
                X
              </button>
              <a href="/about"><b>À propos</b></a>
              <a href="/volunteer"><b>Formation</b></a>
              <a href="/advice"><b>Projets</b></a>
              <a href="/events"><b>Textiss</b></a>
              <a href="/faq"><b>FAQ</b></a>
              <a href="/contact"><b>Contact</b></a>
            </div>
          </div>
          <div className="nav-actions">
            <a href="/start" className="start">S'identifier</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;