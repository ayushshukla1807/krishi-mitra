import React from 'react';

const Weather = () => {
  const forecast = [
    { day: 'Today', temp: '28°C', condition: 'Sunny', rain: '10%', humidity: '65%' },
    { day: 'Tomorrow', temp: '26°C', condition: 'Partly Cloudy', rain: '20%', humidity: '70%' },
    { day: 'Day 3', temp: '24°C', condition: 'Light Rain', rain: '60%', humidity: '85%' }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>🌤️ Weather Forecast</h1>
        <p>Accurate weather predictions for better farming decisions</p>
      </div>

      <div className="card">
        <h2>Current Weather</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="stat-card">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>28°C</div>
            <div>Temperature</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>65%</div>
            <div>Humidity</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>12 km/h</div>
            <div>Wind Speed</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>10%</div>
            <div>Rain Chance</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>3-Day Forecast</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Temperature</th>
                <th>Condition</th>
                <th>Rain Chance</th>
                <th>Humidity</th>
              </tr>
            </thead>
            <tbody>
              {forecast.map((day, index) => (
                <tr key={index}>
                  <td>{day.day}</td>
                  <td>{day.temp}</td>
                  <td>{day.condition}</td>
                  <td>{day.rain}</td>
                  <td>{day.humidity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Weather;
