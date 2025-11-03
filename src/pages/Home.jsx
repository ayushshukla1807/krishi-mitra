import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      emoji: '🌱',
      title: 'Crop Management',
      description: 'Track your crops, growth stages, and manage your farming activities efficiently.',
      link: '/crops'
    },
    {
      emoji: '🐛',
      title: 'Pest Detection',
      description: 'AI-powered disease and pest identification with treatment recommendations.',
      link: '/pest-detection'
    },
    {
      emoji: '🚜',
      title: 'Machine Rental',
      description: 'Rent farming equipment or list your machines for additional income.',
      link: '/machine-rental'
    },
    {
      emoji: '🌤️',
      title: 'Weather Forecast',
      description: 'Accurate weather predictions tailored for agricultural activities.',
      link: '/weather'
    },
    {
      emoji: '📈',
      title: 'Market Prices',
      description: 'Real-time commodity prices and market trends analysis.',
      link: '/market-prices'
    },
    {
      emoji: '👥',
      title: 'Community Forum',
      description: 'Connect with fellow farmers, share knowledge and experiences.',
      link: '/community'
    }
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Krishi Mitra</h1>
          <p>Your Digital Farming Assistant - Empowering Farmers with Technology</p>
          <div className="hero-buttons">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary">
                  Get Started Free
                </Link>
                <Link to="/login" className="btn btn-outline" style={{ background: 'transparent', borderColor: 'white', color: 'white' }}>
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="feature-card">
              <div className="feature-icon">{feature.emoji}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
