import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  const features = [
    {
      emoji: '🌱',
      title: t('nav.crops'),
      description: 'Track your crops, growth stages, and manage your farming activities efficiently.',
      link: '/crops'
    },
    {
      emoji: '👷',
      title: t('nav.workers'),
      description: 'Manage and hire farm workers with contact details, location, and daily wages information.',
      link: '/workers'
    },
    {
      emoji: '🌾',
      title: t('nav.cropSuggestion'),
      description: 'Get intelligent crop recommendations based on current weather conditions and seasonal patterns.',
      link: '/crop-suggestion'
    },
    {
      emoji: '📈',
      title: t('nav.marketPrices'),
      description: 'Real-time commodity prices for crops, fruits, and vegetables with market trends analysis.',
      link: '/market-prices'
    },
    {
      emoji: '🚜',
      title: t('nav.machineRental'),
      description: 'Rent farming equipment or list your machines for additional income with easy booking system.',
      link: '/machine-rental'
    },
    {
      emoji: '👥',
      title: t('nav.community'),
      description: 'Connect with fellow farmers, share knowledge and experiences in the farming community.',
      link: '/community'
    }
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>{t('home.welcome')}</h1>
          <p>{t('home.tagline')}</p>
          <div className="hero-buttons">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary">
                  {t('home.getStarted')}
                </Link>
                <Link to="/login" className="btn btn-outline" style={{ background: 'transparent', borderColor: 'white', color: 'white' }}>
                  {t('home.signIn')}
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

      {/* Stats Section */}
      <section style={{ background: 'var(--primary-green)', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Trusted by Farmers Across India</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>10,000+</div>
              <div>Active Farmers</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>50,000+</div>
              <div>Crops Managed</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>15,000+</div>
              <div>Workers Hired</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>₹2Cr+</div>
              <div>Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
