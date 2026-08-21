import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand" aria-label="SmartVert Home">
          <span className="brand-smart">Smart</span>
          <span className="brand-vert">Vert</span>
          <span className="brand-dot"></span>
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
          <a href="#calculate" className="nav-btn-primary">Build for free</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`navbar-hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
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
            <a href="#calculate" className="mobile-btn-primary" onClick={() => setMobileMenuOpen(false)}>Build for free</a>
          </div>
        </div>
      )}
    </header>
  );
}
