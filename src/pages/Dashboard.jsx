import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const features = [
    { 
      emoji: '🌱',
      title: 'Crop Management', 
      description: 'Track and manage your crops',
      link: '/crops'
    },
    { 
      emoji: '🐛',
      title: 'Pest Detection', 
      description: 'AI-powered disease identification',
      link: '/pest-detection'
    },
    { 
      emoji: '🌤️',
      title: 'Weather Forecast', 
      description: 'Accurate weather predictions',
      link: '/weather'
    },
    { 
      emoji: '📈',
      title: 'Market Prices', 
      description: 'Real-time commodity prices',
      link: '/market-prices'
    },
    { 
      emoji: '🚜',
      title: 'Machine Rental', 
      description: 'Rent farming equipment',
      link: '/machine-rental'
    },
    { 
      emoji: '👥',
      title: 'Community Forum', 
      description: 'Connect with fellow farmers',
      link: '/community'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name}! 👋</h1>
        <p>Here's what's happening with your farm today.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">12</div>
          <div>Active Crops</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3</div>
          <div>Pending Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">₹45,670</div>
          <div>Expected Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div>Crop Health</div>
        </div>
      </div>

      <div className="card">
        <h2>Farm Management Tools</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="feature-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {feature.emoji}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div style={{ 
                marginTop: '1rem', 
                color: '#2e7d32', 
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                Click to explore →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
