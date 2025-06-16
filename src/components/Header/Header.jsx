import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu'

const Header = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header>
      <div className="header-inner container">
        <Link to="/" className="logo" aria-label="Tailor brand logo" tabIndex="0">Tailor.</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/" className="active" tabIndex="0">Home</Link>
          <Link to="/about" tabIndex="0">About</Link>
          <Link to="/services" tabIndex="0">Services</Link>
          <Link to="/blog" tabIndex="0">Blog</Link>
          <Link to="/contact" tabIndex="0">Contact</Link>
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
        <Link to="/" tabIndex="0">Home</Link>
        <Link to="/about" tabIndex="0">About</Link>
        <Link to="/services" tabIndex="0">Services</Link>
        <Link to="/blog" tabIndex="0">Blog</Link>
        <Link to="/contact" tabIndex="0">Contact</Link>
      </nav>
    </header>
  )
}

export default Header