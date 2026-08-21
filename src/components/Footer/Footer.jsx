import './Footer.css';
import footerLogoSvg from '../../images/SmartVert_logo.svg';
import xIconSvg from '../../icons/social_x_original.svg';
import instagramIconSvg from '../../icons/instagram_original_mono.svg';
import linkedinIconSvg from '../../icons/linkedin_original_mono.svg';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Content Row */}
        <div className="footer-main-row">
          {/* Brand Info & Socials */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo" aria-label="SmartVert Home">
              <img src={footerLogoSvg} alt="SmartVert" className="footer-logo-img" height="28" />
            </a>

            <p className="footer-bio">
              Helping Nigerian homeowners and businesses know exactly what solar system they need before speaking to a vendor.
            </p>

            {/* Social Links */}
            <div className="footer-socials">
              {/* X / Twitter */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="SmartVert on X">
                <img src={xIconSvg} alt="X (Twitter)" className="social-icon-img" width="18" height="18" />
              </a>

              {/* Instagram */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="SmartVert on Instagram">
                <img src={instagramIconSvg} alt="Instagram" className="social-icon-img" width="18" height="18" />
              </a>

              {/* LinkedIn */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="SmartVert on LinkedIn">
                <img src={linkedinIconSvg} alt="LinkedIn" className="social-icon-img" width="18" height="18" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="footer-nav-columns">
            {/* Column 1: Company */}
            <div className="footer-col">
              <h4 className="footer-col-heading">COMPANY</h4>
              <ul className="footer-links-list">
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#careers" className="footer-link">Careers</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            {/* Column 2: Product */}
            <div className="footer-col">
              <h4 className="footer-col-heading">PRODUCT</h4>
              <ul className="footer-links-list">
                <li><a href="#how-it-works" className="footer-link">How it works</a></li>
                <li><a href="#features" className="footer-link">Appliance library</a></li>
                <li><a href="#results" className="footer-link">Calculation method</a></li>
                <li><a href="#faq" className="footer-link">FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Account */}
            <div className="footer-col">
              <h4 className="footer-col-heading">ACCOUNT</h4>
              <ul className="footer-links-list">
                <li><a href="#signup" className="footer-link">Sign up free</a></li>
                <li><a href="#signin" className="footer-link">Sign in</a></li>
                <li><a href="#settings" className="footer-link">Settings</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026 SmartVert. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
