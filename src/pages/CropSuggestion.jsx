import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CropSuggestion = () => {
  const { t } = useTranslation();
  const [weatherData, setWeatherData] = useState({
    temperature: 28,
    humidity: 65,
    rainfall: 'Low',
    season: 'Summer'
  });

  const cropSuggestions = {
    Summer: {
      crops: ['Cotton', 'Maize', 'Moong', 'Rice', 'Sugarcane'],
      type: 'Kharif',
      description: 'Summer crops suitable for hot weather conditions',
      tips: [
        'Ensure proper irrigation as evaporation rates are high',
        'Use mulch to conserve soil moisture',
        'Plant drought-resistant varieties'
      ]
    },
    Winter: {
      crops: ['Wheat', 'Barley', 'Mustard', 'Potato', 'Onion'],
      type: 'Rabi',
      description: 'Winter crops suitable for cooler temperatures',
      tips: [
        'Protect crops from frost during peak winter',
        'Ensure proper drainage to prevent waterlogging',
        'Use cold-resistant seed varieties'
      ]
    },
    Rainy: {
      crops: ['Paddy', 'Soybean', 'Tur', 'Urad', 'Groundnut'],
      type: 'Kharif',
      description: 'Crops suitable for monsoon season',
      tips: [
        'Ensure proper drainage in fields',
        'Protect against waterlogging',
        'Use disease-resistant varieties for humid conditions'
      ]
    }
  };

  const currentSuggestion = cropSuggestions[weatherData.season];

  return (
    <div className="page">
      <div className="page-header">
        <h1>🌾 Crop Suggestion</h1>
        <p>Get intelligent crop recommendations based on weather conditions</p>
      </div>

      <div className="card">
        <h2>Current Weather Conditions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="stat-card">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{weatherData.temperature}°C</div>
            <div>Temperature</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{weatherData.humidity}%</div>
            <div>Humidity</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{weatherData.rainfall}</div>
            <div>Rainfall</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{weatherData.season}</div>
            <div>Season</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Recommended Crops for {weatherData.season} Season</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div>
            <h3 style={{ color: '#2e7d32', marginBottom: '0.5rem' }}>
              Crop Type: {currentSuggestion.type}
            </h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              {currentSuggestion.description}
            </p>
          </div>

          <div>
            <h4>Recommended Crops:</h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '1rem',
              marginTop: '1rem'
            }}>
              {currentSuggestion.crops.map((crop, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '1rem',
                    background: '#f8fdf8',
                    border: '2px solid #4caf50',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  {crop}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>Cultivation Tips:</h4>
            <ul style={{ paddingLeft: '1.5rem', color: '#666' }}>
              {currentSuggestion.tips.map((tip, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Seasonal Crop Calendar</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Season</th>
                <th>Crop Type</th>
                <th>Best Crops</th>
                <th>Sowing Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Summer (Mar-Jun)</td>
                <td>Kharif</td>
                <td>Cotton, Maize, Rice</td>
                <td>April - June</td>
              </tr>
              <tr>
                <td>Rainy (Jul-Oct)</td>
                <td>Kharif</td>
                <td>Paddy, Soybean, Groundnut</td>
                <td>June - July</td>
              </tr>
              <tr>
                <td>Winter (Nov-Feb)</td>
                <td>Rabi</td>
                <td>Wheat, Mustard, Potato</td>
                <td>October - November</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CropSuggestion;
