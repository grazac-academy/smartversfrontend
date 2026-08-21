import './Problem.css';
import problemImage from '../../assets/problem-image.png';

export default function Problem() {
  const problems = [
    {
      icon: '⚡',
      iconBg: '#FFF3E8',
      title: 'Under-sizing',
      description:
        'System trips the moment you run the fridge and fan together. Vendor undersized the quote to make it appear affordable.',
    },
    {
      icon: '💸',
      iconBg: '#EAF8EE',
      title: 'Over-sizing',
      description:
        'A 5kVA inverter for a 1.2kVA load. Vendor sold you excess capacity and expensive equipment you will never realistically need.',
    },
    {
      icon: '🎲',
      iconBg: '#EEF3FB',
      title: 'Guesswork',
      description:
        'Most quotes are based on gut feel, not your actual appliance loads. You end up with mismatched batteries and panels that degrade fast.',
    },
  ];

  return (
    <section className="problem-section" id="about">
      <div className="problem-container">
        {/* Section Header */}
        <div className="problem-header">
          <span className="section-eyebrow">THE PROBLEM</span>
          <h2 className="problem-title">Why solar buyers keep getting it wrong</h2>
          <p className="problem-subtitle">
            Without a simple way to calculate their actual power needs, buyers are left to rely on vendor quotes. That can lead to three common problems:
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="problem-body">
          {/* Left Media Illustration */}
          <div className="problem-visual">
            <div className="problem-image-wrapper">
              <img
                src={problemImage}
                alt="Confused solar buyer reviewing an expensive vendor quote"
                className="problem-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Problem Cards */}
          <div className="problem-cards">
            {problems.map((item, index) => (
              <div key={index} className="problem-card">
                <div
                  className="problem-icon-wrapper"
                  style={{ backgroundColor: item.iconBg }}
                  aria-hidden="true"
                >
                  <span className="problem-emoji">{item.icon}</span>
                </div>
                <div className="problem-card-content">
                  <h3 className="problem-card-title">{item.title}</h3>
                  <p className="problem-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
