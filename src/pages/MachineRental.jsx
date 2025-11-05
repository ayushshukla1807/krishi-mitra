import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaEdit, FaTrash, FaTractor, FaTools } from 'react-icons/fa';

const MachineRental = () => {
  const { t } = useTranslation();
  const [machines, setMachines] = useState([
    { id: 1, name: 'Tractor', owner: 'Ramesh Patel', contact: '9876543210', price: '₹1200/hour', location: 'Akola' },
    { id: 2, name: 'Rotavator', owner: 'Suresh Kumar', contact: '9876543211', price: '₹800/hour', location: 'Barshitakli' },
    { id: 3, name: 'Harvester', owner: 'Meena Sharma', contact: '9876543212', price: '₹2500/hour', location: 'Akola' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    contact: '',
    price: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMachine = {
      id: Date.now(),
      ...formData
    };
    setMachines([...machines, newMachine]);
    setFormData({
      name: '',
      owner: '',
      contact: '',
      price: '',
      location: ''
    });
    setShowForm(false);
  };

  const deleteMachine = (id) => {
    setMachines(machines.filter(machine => machine.id !== id));
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>🚜 Machine Rental</h1>
        <p>Rent farming equipment from nearby farmers</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>Available Machines</h2>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <FaPlus style={{ marginRight: '0.5rem' }} />
            Add Your Machine
          </button>
        </div>

        {showForm && (
          <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <h3>List Your Machine</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Machine Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g., Tractor, Rotavator, Harvester"
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  required
                />
              </div>
              <div className="form-group">
                <label>Rental Price</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g., ₹1200/hour, ₹8000/day"
                  required
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="btn btn-primary">List Machine</button>
                <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Machine</th>
                <th>Owner</th>
                <th>Contact</th>
                <th>Price</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {machines.map(machine => (
                <tr key={machine.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaTractor style={{ color: '#4caf50' }} />
                      {machine.name}
                    </div>
                  </td>
                  <td>{machine.owner}</td>
                  <td>{machine.contact}</td>
                  <td style={{ fontWeight: 'bold', color: '#2e7d32' }}>{machine.price}</td>
                  <td>{machine.location}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-primary" style={{ padding: '0.25rem 0.5rem' }}>
                        Rent Now
                      </button>
                      <button 
                        className="btn btn-outline" 
                        style={{ padding: '0.25rem 0.5rem', color: 'red', borderColor: 'red' }}
                        onClick={() => deleteMachine(machine.id)}
                      >
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

      <div className="card">
        <h2>Machine Rental Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="stat-card">
            <div className="stat-number">{machines.length}</div>
            <div>Total Machines</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15</div>
            <div>Total Rentals</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">₹45,000</div>
            <div>Revenue Generated</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">92%</div>
            <div>Satisfaction Rate</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Popular Machine Categories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <FaTractor style={{ fontSize: '2rem', color: '#4caf50', marginBottom: '1rem' }} />
            <h3>Tractors</h3>
            <p style={{ color: '#666' }}>Heavy duty farming equipment</p>
            <div style={{ color: '#2e7d32', fontWeight: 'bold' }}>Starting from ₹1000/hour</div>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e0e0e0', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <FaTools style={{ fontSize: '2rem', color: '#ff9800', marginBottom: '1rem' }} />
            <h3>Harvesters</h3>
            <p style={{ color: '#666' }}>Efficient crop harvesting</p>
            <div style={{ color: '#2e7d32', fontWeight: 'bold' }}>Starting from ₹2500/hour</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineRental;
