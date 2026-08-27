import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section" id="calculate">
      <div className="cta-container">
        {/* Main CTA Content */}
        <div className="cta-content">
          <h2 className="cta-title">
            Know your numbers{' '}
            <span className="cta-title-highlight">before you talk to any vendor.</span>
          </h2>
          <p className="cta-subtitle">
            Get your solar recommendation in under 3 minutes, no electrical knowledge required. Walk into any solar shop with a clear, printable summary of exactly what you need.
          </p>

          {/* Action Buttons */}
          <div className="cta-buttons-group">
            <a href="#calculate" className="cta-btn-primary">
              Calculate My Solar Setup
            </a>
            <a href="#signup" className="cta-btn-secondary">
              Create Free Account
            </a>
          </div>

          {/* Mobile App Download Links */}
          <div className="cta-mobile-stores">
            <span className="mobile-stores-eyebrow">ALSO AVAILABLE ON MOBILE</span>
            <div className="store-buttons-container">
              {/* Apple App Store */}
              <a
                href="#app-store"
                className="store-button"
                aria-label="Download SmartVert on the Apple App Store"
              >
                <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.72-.94 2.74 1 .08 2.03-.5 2.66-1.24z" />
                </svg>
                <div className="store-text">
                  <span className="store-subtext">Download on the</span>
                  <span className="store-title">App Store</span>
                </div>
              </a>

              {/* Google Play Store */}
              <a
                href="#google-play"
                className="store-button"
                aria-label="Get SmartVert on Google Play"
              >
                <svg className="store-icon" viewBox="0 0 24 24" width="22" height="22">
                  <path fill="#4285F4" d="M3.6 1.8L13.8 12 3.6 22.2c-.4-.4-.6-1-.6-1.7V3.5c0-.7.2-1.3.6-1.7z" />
                  <path fill="#FBBC05" d="M17.4 8.4l-3.6 3.6 3.6 3.6 4.1-2.4c1.2-.7 1.2-1.8 0-2.5l-4.1-2.3z" />
                  <path fill="#EA4335" d="M13.8 12L3.6 1.8c.6-.4 1.4-.4 2.1 0l11.7 6.6-3.6 3.6z" />
                  <path fill="#34A853" d="M13.8 12l3.6 3.6-11.7 6.6c-.7.4-1.5.4-2.1 0L13.8 12z" />
                </svg>
                <div className="store-text">
                  <span className="store-subtext">Get it on</span>
                  <span className="store-title">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
