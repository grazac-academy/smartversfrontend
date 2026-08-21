import './Hero.css';
import heroImage from '../../images/hero_image.png';
import gridImg from '../../images/grid.png';

export default function Hero() {
  const locations = [
    '📍 Lagos',
    '📍 Abuja (FCT)',
    '📍 Port Harcourt',
    '📍 Kano',
    '📍 Enugu',
    '📍 Ibadan',
  ];

  return (
    <section className="hero-section" id="home">
      {/* Background Perspective Grid from src/images/grid.png */}
      <div className="hero-grid-wrapper" aria-hidden="true">
        <img src={gridImg} alt="" className="hero-grid-image" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Main Headline */}
          <h1 className="hero-title">
            Size your solar <span className="text-highlight">Right, First Time.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="hero-description">
            Add your appliances, set your usage hours and get the right inverter, battery, and solar panel size in under 3 minutes. No technical knowledge needed.
          </p>

          {/* Call to Action Button */}
          <div className="hero-cta-wrapper">
            <a href="#calculate" className="hero-cta-btn">
              Calculate my Solar size
            </a>
          </div>

          {/* 3 Metric Stats */}
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-value">3 min</span>
              <span className="metric-label">Average time to result</span>
            </div>
            <div className="metric-divider" aria-hidden="true"></div>
            <div className="metric-item">
              <span className="metric-value">99%</span>
              <span className="metric-label">Calculation accuracy</span>
            </div>
            <div className="metric-divider" aria-hidden="true"></div>
            <div className="metric-item">
              <span className="metric-value">₦0</span>
              <span className="metric-label">No charges</span>
            </div>
          </div>

          {/* Social Proof Locations */}
          <div className="hero-social-proof">
            <p className="social-proof-text">
              Used by homeowners, shop owners &amp; installers across
            </p>
            <div className="location-tags">
              {locations.map((loc, idx) => (
                <span key={idx} className="location-pill">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Visual Media */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="SmartVert solar sizing mobile app with home solar setup"
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
