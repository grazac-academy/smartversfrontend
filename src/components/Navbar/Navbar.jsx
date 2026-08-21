import { useState } from 'react';
import './Navbar.css';
import logoSvg from '../../images/Logo.svg';
import hamburgerSvg from '../../icons/ci_hamburger-md.svg';
import closeSvg from '../../icons/iconamoon_close.svg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand" aria-label="SmartVert Home">
          <img src={logoSvg} alt="SmartVert" className="navbar-logo-img" height="24" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#how-it-works" className="nav-link">How it works</a>
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <a href="#signin" className="nav-btn-signin">Sign in</a>
          <a href="#calculate" className="nav-btn-primary">Start for free</a>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <button
          type="button"
          className="navbar-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Toggle navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <img
            src={mobileMenuOpen ? closeSvg : hamburgerSvg}
            alt=""
            className="hamburger-icon-img"
            width="24"
            height="24"
          />
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <div className="mobile-links">
            <a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#how-it-works" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>How it works</a>
          </div>
          <div className="mobile-actions">
            <a href="#signin" className="mobile-btn-signin" onClick={() => setMobileMenuOpen(false)}>Sign in</a>
            <a href="#calculate" className="mobile-btn-primary" onClick={() => setMobileMenuOpen(false)}>Start for free</a>
          </div>
        </div>
      )}
    </header>
  );
}
