import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Crops = () => {
  const [crops] = useState([
    { id: 1, name: 'Wheat', variety: 'Sharbati', area: '2.5 acres', planted: '2024-10-15', stage: 'Vegetative', health: 'Good' },
    { id: 2, name: 'Sugarcane', variety: 'CO-86032', area: '5 acres', planted: '2024-09-20', stage: 'Growth', health: 'Excellent' },
    { id: 3, name: 'Tomato', variety: 'Hybrid', area: '1 acre', planted: '2024-11-01', stage: 'Flowering', health: 'Good' }
  ]);

  return (
    <div className="page">
      <div className="page-header">
        <h1>🌱 My Crops</h1>
        <p>Manage and track your crop cultivation</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>Current Crops</h2>
          <button className="btn btn-primary">
            <FaPlus style={{ marginRight: '0.5rem' }} />
            Add New Crop
          </button>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Crop Name</th>
                <th>Variety</th>
                <th>Area</th>
                <th>Planted On</th>
                <th>Growth Stage</th>
                <th>Health</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {crops.map(crop => (
                <tr key={crop.id}>
                  <td>{crop.name}</td>
                  <td>{crop.variety}</td>
                  <td>{crop.area}</td>
                  <td>{crop.planted}</td>
                  <td>{crop.stage}</td>
                  <td>
                    <span style={{ 
                      color: crop.health === 'Excellent' ? 'green' : crop.health === 'Good' ? 'orange' : 'red',
                      fontWeight: 'bold'
                    }}>
                      {crop.health}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>
                        <FaEdit />
                      </button>
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', color: 'red', borderColor: 'red' }}>
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Crops;
