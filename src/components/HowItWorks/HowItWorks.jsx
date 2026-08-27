import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Pick your appliances',
      description:
        'Choose your appliances from a list of common Nigerian home essentials: fridge, TV, fans, AC, lights, and more.',
    },
    {
      number: '02',
      title: 'Set usage hours',
      description:
        'Set your daily usage hours and choose between backup or full off-grid power.',
    },
    {
      number: '03',
      title: 'Get your sizing',
      description:
        'Your load, surge needs, battery size, and solar capacity are calculated instantly.',
    },
    {
      number: '04',
      title: 'Save & share',
      description:
        'Export a clear summary or save your results, then walk into any vendor conversation with confidence.',
    },
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="how-it-works-container">
        {/* Section Header */}
        <div className="how-header">
          <span className="section-eyebrow">HOW IT WORKS</span>
          <h2 className="how-title">
            Four simple steps. One confidently sized solar system.
          </h2>
          <p className="how-subtitle">
            No electrical knowledge needed. We handle the maths
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-card-header">
                <span className="step-number">{step.number}</span>
                <div className="step-connector-line" aria-hidden="true"></div>
              </div>
              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="how-cta-container">
          <a href="#calculate" className="how-cta-button">
            Start Calculating Now
          </a>
        </div>
      </div>
    </section>
  );
}
