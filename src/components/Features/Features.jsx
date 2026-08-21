import './Features.css';

export default function Features() {
  const featureList = [
    {
      icon: '⚡',
      iconBg: '#FFF3E8',
      title: 'Surge-aware',
      description:
        'Fridges, ACs and pumps have a 3–5× startup surge that trips undersized inverters. We factor this in automatically.',
    },
    {
      icon: '📐',
      iconBg: '#EEF3FB',
      title: '25% safety margin',
      description:
        'Every recommendation includes a 25% headroom buffer so your system isn’t pushed to its limit every day.',
    },
    {
      icon: '✏️',
      iconBg: '#EAF8EE',
      title: 'Fully editable',
      description:
        'Override any default wattage to match your specific model. Your calculations update immediately.',
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <div className="features-header-left">
            <h2 className="features-title">
              Every Nigerian home appliance.{' '}
              <span className="features-title-highlight">Pre-filled.</span>
            </h2>
          </div>
          <div className="features-header-right">
            <p className="features-subtitle">
              We’ve pre-loaded wattage values for 20+ common Nigerian home appliances from fridges and fans to TVs, ACs, pumps, and more. Every value is editable, so you can adjust it to match your exact appliance.
            </p>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="features-grid">
          {featureList.map((item, index) => (
            <div key={index} className="feature-item-card">
              <div
                className="feature-icon-box"
                style={{ backgroundColor: item.iconBg }}
                aria-hidden="true"
              >
                <span className="feature-emoji">{item.icon}</span>
              </div>
              <div className="feature-text-content">
                <h3 className="feature-item-title">{item.title}</h3>
                <p className="feature-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
