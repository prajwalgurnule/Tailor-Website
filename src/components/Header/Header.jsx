import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu'

const Header = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header>
      <div className="header-inner container">
        <NavLink to="/" className="logo" aria-label="Tailor brand logo" tabIndex="0">Tailor.</NavLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
            tabIndex="0"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active" : ""}
            tabIndex="0"
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? "active" : ""}
            tabIndex="0"
          >
            Services
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => isActive ? "active" : ""}
            tabIndex="0"
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active" : ""}
            tabIndex="0"
          >
            Contact
          </NavLink>
        </nav>
        <button className="visit-button" aria-label="Visit us button">Visit us</button>
        <button 
          className="mobile-menu-button" 
          aria-label="Open mobile menu" 
          aria-expanded={isMobileMenuOpen} 
          aria-controls="mobile-menu"
          onClick={toggleMobileMenu}
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>
      <nav 
        className={`mobile-nav ${isMobileMenuOpen ? 'show' : ''}`} 
        id="mobile-menu" 
        aria-label="Mobile navigation" 
        hidden={!isMobileMenuOpen}
      >
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : ""}
          tabIndex="0"
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active" : ""}
          tabIndex="0"
        >
          About
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) => isActive ? "active" : ""}
          tabIndex="0"
        >
          Services
        </NavLink>
        <NavLink 
          to="/blog" 
          className={({ isActive }) => isActive ? "active" : ""}
          tabIndex="0"
        >
          Blog
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "active" : ""}
          tabIndex="0"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Header