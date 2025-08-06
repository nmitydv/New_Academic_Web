import { useState } from 'react';
import logo from '../assets/img/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Benefit', href: '#benefit' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginClick = () => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    // Add your login functionality here
    console.log('Login clicked');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-container">
            <div className="logo-icon">
              <img src={logo} alt="Amour Logo" className="logo-image" />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav desktop-nav">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Login Button */}
        <div className="navbar-actions">
          <button className="login-btn" onClick={handleLoginClick}>
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
          >
            {item.name}
          </a>
        ))}
        <button className="mobile-login-btn" onClick={handleLoginClick}>
          <span>Login</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
