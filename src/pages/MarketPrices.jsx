import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MarketPrices = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const commodities = [
    { 
      category: 'crops',
      name: 'Wheat', 
      price: '₹2,100/qtl', 
      change: '+2.5%', 
      market: 'Mumbai APMC',
      date: '2024-11-05'
    },
    { 
      category: 'crops',
      name: 'Rice', 
      price: '₹3,200/qtl', 
      change: '+1.2%', 
      market: 'Delhi Mandi',
      date: '2024-11-05'
    },
    { 
      category: 'crops',
      name: 'Sugarcane', 
      price: '₹3,500/ton', 
      change: '+3.1%', 
      market: 'Kolhapur',
      date: '2024-11-05'
    },
    { 
      category: 'fruits',
      name: 'Tomato', 
      price: '₹40/kg', 
      change: '-5.3%', 
      market: 'Pune Market',
      date: '2024-11-05'
    },
    { 
      category: 'fruits',
      name: 'Mango', 
      price: '₹80/kg', 
      change: '+10%', 
      market: 'Nagpur',
      date: '2024-11-05'
    },
    { 
      category: 'fruits',
      name: 'Banana', 
      price: '₹35/kg', 
      change: '-2%', 
      market: 'Nashik',
      date: '2024-11-05'
    },
    { 
      category: 'vegetables',
      name: 'Potato', 
      price: '₹20/kg', 
      change: '-2%', 
      market: 'Agra',
      date: '2024-11-05'
    },
    { 
      category: 'vegetables',
      name: 'Onion', 
      price: '₹30/kg', 
      change: '+8%', 
      market: 'Nashik',
      date: '2024-11-05'
    },
    { 
      category: 'vegetables',
      name: 'Cabbage', 
      price: '₹25/kg', 
      change: '+3%', 
      market: 'Pune',
      date: '2024-11-05'
    }
  ];

  const filteredCommodities = activeCategory === 'all' 
    ? commodities 
    : commodities.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Products', count: commodities.length },
    { id: 'crops', name: 'Crops', count: commodities.filter(item => item.category === 'crops').length },
    { id: 'fruits', name: 'Fruits', count: commodities.filter(item => item.category === 'fruits').length },
    { id: 'vegetables', name: 'Vegetables', count: commodities.filter(item => item.category === 'vegetables').length }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>📈 Market Prices</h1>
        <p>Real-time commodity prices and market trends</p>
      </div>

      <div className="card">
        <h2>Price Categories</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {category.name}
              <span style={{ 
                background: activeCategory === category.id ? 'white' : '#2e7d32',
                color: activeCategory === category.id ? '#2e7d32' : 'white',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.8rem'
              }}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Commodity</th>
                <th>Price</th>
                <th>Change</th>
                <th>Market</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredCommodities.map((item, index) => (
                <tr key={index}>
                  <td>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      background: 
                        item.category === 'crops' ? '#e8f5e8' :
                        item.category === 'fruits' ? '#fff3e0' :
                        '#e3f2fd',
                      color: 
                        item.category === 'crops' ? '#2e7d32' :
                        item.category === 'fruits' ? '#f57c00' :
                        '#1976d2'
                    }}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </td>
                  <td style={{ fontWeight: 'bold' }}>{item.name}</td>
                  <td style={{ fontWeight: 'bold' }}>{item.price}</td>
                  <td style={{ 
                    color: item.change.startsWith('+') ? 'green' : 'red', 
                    fontWeight: 'bold' 
                  }}>
                    {item.change}
                  </td>
                  <td>{item.market}</td>
                  <td style={{ color: '#666', fontSize: '0.9rem' }}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Market Trends</h2>
        <div style={{ 
          background: '#f8fdf8', 
          padding: '2rem', 
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Live Market Updates</h3>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Current market trends show increasing prices for fruits and stable crop prices.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2e7d32' }}>↑ 12%</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Fruits Price Increase</div>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#666' }}>→ 2%</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Crops Price Change</div>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f44336' }}>↓ 5%</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Vegetables Price Drop</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;
