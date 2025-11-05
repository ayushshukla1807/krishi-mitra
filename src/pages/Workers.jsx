import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaEdit, FaTrash, FaPhone, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';

const Workers = () => {
  const { t } = useTranslation();
  const [workers, setWorkers] = useState([
    { id: 1, name: 'Ramesh Kumar', contact: '9876543210', area: 'Akola', wages: '500' },
    { id: 2, name: 'Suresh Patel', contact: '9876543211', area: 'Barshitakli', wages: '450' },
    { id: 3, name: 'Meena Sharma', contact: '9876543212', area: 'Akola', wages: '400' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    area: '',
    wages: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorker = {
      id: Date.now(),
      ...formData
    };
    setWorkers([...workers, newWorker]);
    setFormData({ name: '', contact: '', area: '', wages: '' });
    setShowForm(false);
  };

  const deleteWorker = (id) => {
    setWorkers(workers.filter(worker => worker.id !== id));
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>👷 {t('workers.title')}</h1>
        <p>{t('workers.subtitle')}</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>{t('workers.availableWorkers')}</h2>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            <FaPlus style={{ marginRight: '0.5rem' }} />
            {t('workers.addNewWorker')}
          </button>
        </div>

        {showForm && (
          <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <h3>{t('workers.addNewWorker')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t('workers.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter worker name"
                  required
                />
              </div>
              <div className="form-group">
                <label>{t('workers.contact')}</label>
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
                <label>{t('workers.area')}</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Enter area/location"
                  required
                />
              </div>
              <div className="form-group">
                <label>{t('workers.wages')}</label>
                <input
                  type="number"
                  name="wages"
                  value={formData.wages}
                  onChange={handleChange}
                  placeholder="Enter daily wages"
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="btn btn-primary">{t('workers.addWorker')}</button>
                <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>{t('workers.name')}</th>
                <th>{t('workers.contact')}</th>
                <th>{t('workers.area')}</th>
                <th>{t('workers.wages')}</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workers.map(worker => (
                <tr key={worker.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        background: '#4caf50', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {worker.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {worker.name}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaPhone style={{ color: '#666' }} />
                      {worker.contact}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaMapMarkerAlt style={{ color: '#f44336' }} />
                      {worker.area}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaRupeeSign style={{ color: '#4caf50' }} />
                      {worker.wages}/day
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem' }}>
                        <FaEdit />
                      </button>
                      <button 
                        className="btn btn-outline" 
                        style={{ padding: '0.25rem 0.5rem', color: 'red', borderColor: 'red' }}
                        onClick={() => deleteWorker(worker.id)}
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
        <h2>Worker Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="stat-card">
            <div className="stat-number">{workers.length}</div>
            <div>Total Workers</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">₹{workers.reduce((sum, worker) => sum + parseInt(worker.wages), 0)}</div>
            <div>Total Daily Wages</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div>Locations</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">85%</div>
            <div>Availability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workers;
