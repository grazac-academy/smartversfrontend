import './UseCases.css';
import houseIcon from '../../icons/🏡.png';
import storeIcon from '../../icons/🏪.png';
import wrenchIcon from '../../icons/🔧.png';

export default function UseCases() {
  const useCases = [
    {
      iconImg: houseIcon,
      title: 'Homeowners & renters',
      description:
        'Know what size system your home actually needs before comparing quotes.',
    },
    {
      iconImg: storeIcon,
      title: 'Small businesses',
      description:
        'Size your backup power around the equipment your business relies on most.',
    },
    {
      iconImg: wrenchIcon,
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
                <img src={item.iconImg} alt="" className="use-case-icon-img" width="32" height="32" />
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
