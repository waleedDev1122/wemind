import { useEffect, useRef, useState } from 'react';

export default function GrowthStatsSection() {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    { value: 80, label: '80% Time Saved on Admin Tasks' },
    { value: 95, label: '95% Accuracy in AI-Powered Transcriptions' },
    { value: 60, label: '60% Increase in Patient Retention' },
    { value: 100, label: '100% HIPAA and GDPR Compliant' },
  ];

  return (
    <section className="growth-stats-section" ref={statsRef}>
      <div className="container">
        <h2 className="section-title">
          Driving Mental Health Growth and Innovation
        </h2>
        <div className="row stats-row">
          {stats.map((stat, index) => (
            <div className="col-lg-3 col-md-6 col-12 stat-card" key={index}>
              <div className="stat-number">
                {isVisible ? <CountUp end={stat.value} /> : stat.value}%
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h3 className="cta-title">
              Join us on this journey and make healthcare better together
            </h3>
            <form className="subscribe-form">
              <input
                type="email"
                className="form-control email-input"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button type="submit" className="btn btn-primary btn-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function for counting animation
const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // Animation duration in ms
    const increment = end / (duration / 50); // Adjust increment speed

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
};
