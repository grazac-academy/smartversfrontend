import './Results.css';
import lightningIcon from '../../icons/⚡.png';
import batteryIcon from '../../icons/🔋.png';
import sunIcon from '../../icons/☀️.png';

export default function Results() {
  const results = [
    {
      iconImg: lightningIcon,
      accentColor: 'orange',
      label: 'Inverter size',
      value: '2.5 kVA',
      description:
        'The amount of power your inverter needs to handle when your appliances are running together.',
      footnote:
        'kVA = kilowatt-ampere, a measure of how much power your inverter can deliver at any given moment.',
    },
    {
      iconImg: batteryIcon,
      accentColor: 'green',
      label: 'Battery capacity',
      value: '200Ah / 24V',
      description:
        'The amount of battery capacity available to keep your appliances running during a power outage.',
      footnote:
        'Ah (Amp-hours) & V (Volts) determine battery energy storage. We calculate usable depth of discharge for battery longevity.',
    },
    {
      iconImg: sunIcon,
      accentColor: 'blue',
      label: 'Solar capacity',
      value: '1.8 kW / 4 × 450W panels',
      description:
        'The solar capacity needed to support your daily energy use and recharge batteries before sundown.',
      footnote:
        'kW = kilowatts. Sized for Nigeria’s average 5 peak sun hours per day to ensure complete recharge.',
    },
  ];

  return (
    <section className="results-section" id="results">
      <div className="results-container">
        {/* Section Header */}
        <div className="results-header">
          <span className="section-eyebrow">YOUR RESULT</span>
          <h2 className="results-title">Three numbers. One confident decision.</h2>
          <p className="results-subtitle">
            SmartVert turns your appliances and daily usage into the key numbers you need to choose the right solar or inverter system.
          </p>
        </div>

        {/* 3 Result Cards */}
        <div className="results-cards-grid">
          {results.map((item, index) => (
            <div key={index} className={`result-card card-accent-${item.accentColor}`}>
              <div className="result-card-header">
                <div className="result-icon-circle" aria-hidden="true">
                  <img src={item.iconImg} alt="" className="result-icon-img" width="26" height="26" />
                </div>
                <span className="result-label">{item.label}</span>
              </div>

              <div className="result-card-body">
                <h3 className="result-value">{item.value}</h3>
                <p className="result-description">{item.description}</p>
              </div>

              <div className="result-card-footer">
                <p className="result-footnote">{item.footnote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
