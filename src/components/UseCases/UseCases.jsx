import './UseCases.css';

export default function UseCases() {
  const useCases = [
    {
      icon: '🏡',
      title: 'Homeowners & renters',
      description:
        'Know what size system your home actually needs before comparing quotes.',
    },
    {
      icon: '🏪',
      title: 'Small businesses',
      description:
        'Size your backup power around the equipment your business relies on most.',
    },
    {
      icon: '🔧',
      title: 'Solar installers',
      description:
        'Give customers a clear starting point for discussing their solar system needs.',
    },
  ];

  return (
    <section className="use-cases-section">
      <div className="use-cases-container">
        {/* Section Header */}
        <div className="use-cases-header">
          <h2 className="use-cases-title">
            Your power system, made simple.{' '}
            <span className="title-secondary">No electrical expertise required.</span>
          </h2>
        </div>

        {/* 3 Use Case Cards */}
        <div className="use-cases-grid">
          {useCases.map((item, index) => (
            <div key={index} className="use-case-card">
              <div className="use-case-icon-box" aria-hidden="true">
                <span className="use-case-emoji">{item.icon}</span>
              </div>
              <h3 className="use-case-title">{item.title}</h3>
              <p className="use-case-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
