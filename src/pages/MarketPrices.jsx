import React from 'react';

const MarketPrices = () => {
  const commodities = [
    { name: 'Wheat', price: '₹2,100/qtl', change: '+2.5%', market: 'Mumbai APMC' },
    { name: 'Rice', price: '₹3,200/qtl', change: '+1.2%', market: 'Delhi Mandi' },
    { name: 'Tomato', price: '₹40/kg', change: '-5.3%', market: 'Pune Market' },
    { name: 'Sugarcane', price: '₹3,500/ton', change: '+3.1%', market: 'Kolhapur' }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>📈 Market Prices</h1>
        <p>Real-time commodity prices and market trends</p>
      </div>

      <div className="card">
        <h2>Current Prices</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Commodity</th>
                <th>Price</th>
                <th>Change</th>
                <th>Market</th>
              </tr>
            </thead>
            <tbody>
              {commodities.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td style={{ fontWeight: 'bold' }}>{item.price}</td>
                  <td style={{ color: item.change.startsWith('+') ? 'green' : 'red', fontWeight: 'bold' }}>
                    {item.change}
                  </td>
                  <td>{item.market}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MarketPrices;
