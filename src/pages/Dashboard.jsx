import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  const features = [
    { 
      emoji: '🌱',
      title: t('nav.crops'), 
      description: 'Track and manage your crops',
      link: '/crops'
    },
    { 
      emoji: '👷',
      title: t('nav.workers'), 
      description: 'Manage and hire farm workers',
      link: '/workers'
    },
    { 
      emoji: '🌾',
      title: t('nav.cropSuggestion'), 
      description: 'Get crop suggestions based on weather',
      link: '/crop-suggestion'
    },
    { 
      emoji: '📈',
      title: t('nav.marketPrices'), 
      description: 'Real-time commodity prices',
      link: '/market-prices'
    },
    { 
      emoji: '🚜',
      title: t('nav.machineRental'), 
      description: 'Rent farming equipment',
      link: '/machine-rental'
    },
    { 
      emoji: '👥',
      title: t('nav.community'), 
      description: 'Connect with fellow farmers',
      link: '/community'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>{t('dashboard.welcome')}, {user?.name}! 👋</h1>
        <p>{t('dashboard.subtitle')}</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">12</div>
          <div>{t('dashboard.activeCrops')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3</div>
          <div>{t('dashboard.pendingTasks')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">₹45,670</div>
          <div>{t('dashboard.expectedRevenue')}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div>{t('dashboard.cropHealth')}</div>
        </div>
      </div>

      <div className="card">
        <h2>{t('dashboard.farmTools')}</h2>
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

      <div className="card">
        <h2>Recent Activity</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Today</td>
                <td>Wheat crop watering completed</td>
                <td style={{ color: 'green' }}>Completed</td>
              </tr>
              <tr>
                <td>Yesterday</td>
                <td>Hired 2 new farm workers</td>
                <td style={{ color: 'green' }}>Completed</td>
              </tr>
              <tr>
                <td>2 days ago</td>
                <td>Tomato fertilizer application</td>
                <td style={{ color: 'orange' }}>Pending</td>
              </tr>
              <tr>
                <td>3 days ago</td>
                <td>Rice planting completed</td>
                <td style={{ color: 'green' }}>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
