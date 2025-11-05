import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { FaUser, FaMap, FaSeedling, FaTractor } from 'react-icons/fa';

const Profile = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [landDetails, setLandDetails] = useState({
    totalLand: '10',
    cultivatedLand: '7',
    barrenLand: '3',
    soilType: 'Black Soil',
    irrigation: 'Well'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setLandDetails({
      ...landDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // In real app, save to backend
    alert('Land details updated successfully!');
  };

  const cultivationPercentage = (parseInt(landDetails.cultivatedLand) / parseInt(landDetails.totalLand)) * 100;

  return (
    <div className="page">
      <div className="page-header">
        <h1>👤 {t('profile')}</h1>
        <p>Manage your account and farm details</p>
      </div>

      <div className="card">
        <h2>
          <FaUser style={{ marginRight: '0.5rem' }} />
          Personal Information
        </h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>Name:</strong> {user?.name}
            </div>
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
              Edit
            </button>
          </div>
          <div>
            <strong>Email:</strong> {user?.email}
          </div>
          <div>
            <strong>Location:</strong> {user?.location}
          </div>
          <div>
            <strong>Role:</strong> {user?.role}
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>
            <FaMap style={{ marginRight: '0.5rem' }} />
            Land Details
          </h2>
          <button 
            className="btn btn-outline" 
            onClick={() => setIsEditing(!isEditing)}
            style={{ padding: '0.5rem 1rem' }}
          >
            {isEditing ? 'Cancel' : 'Edit Land Details'}
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div className="form-group">
                <label>Total Land Area (acres)</label>
                <input
                  type="number"
                  name="totalLand"
                  value={landDetails.totalLand}
                  onChange={handleChange}
                  placeholder="Total land area"
                  required
                />
              </div>
              <div className="form-group">
                <label>Cultivated Land (acres)</label>
                <input
                  type="number"
                  name="cultivatedLand"
                  value={landDetails.cultivatedLand}
                  onChange={handleChange}
                  placeholder="Cultivated land area"
                  required
                />
              </div>
              <div className="form-group">
                <label>Barren Land (acres)</label>
                <input
                  type="number"
                  name="barrenLand"
                  value={landDetails.barrenLand}
                  onChange={handleChange}
                  placeholder="Barren land area"
                  required
                />
              </div>
              <div className="form-group">
                <label>Soil Type</label>
                <select name="soilType" value={landDetails.soilType} onChange={handleChange}>
                  <option value="Black Soil">Black Soil</option>
                  <option value="Red Soil">Red Soil</option>
                  <option value="Alluvial Soil">Alluvial Soil</option>
                  <option value="Laterite Soil">Laterite Soil</option>
                </select>
              </div>
              <div className="form-group">
                <label>Irrigation Source</label>
                <select name="irrigation" value={landDetails.irrigation} onChange={handleChange}>
                  <option value="Well">Well</option>
                  <option value="Canal">Canal</option>
                  <option value="Tube Well">Tube Well</option>
                  <option value="Rainfed">Rainfed</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Save Changes
            </button>
          </form>
        ) : (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div className="stat-card">
                <div className="stat-number">{landDetails.totalLand} acres</div>
                <div>Total Land</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{landDetails.cultivatedLand} acres</div>
                <div>Cultivated Land</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{landDetails.barrenLand} acres</div>
                <div>Barren Land</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{cultivationPercentage.toFixed(0)}%</div>
                <div>Cultivation Rate</div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <strong>Soil Type:</strong> {landDetails.soilType}
              </div>
              <div>
                <strong>Irrigation Source:</strong> {landDetails.irrigation}
              </div>
            </div>

            {/* Land Usage Visualization */}
            <div style={{ marginTop: '2rem' }}>
              <h4>Land Usage Distribution</h4>
              <div style={{ 
                display: 'flex', 
                height: '40px', 
                borderRadius: '20px', 
                overflow: 'hidden',
                marginTop: '0.5rem',
                border: '1px solid #e0e0e0'
              }}>
                <div 
                  style={{ 
                    flex: parseInt(landDetails.cultivatedLand),
                    background: '#4caf50',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.8rem'
                  }}
                  title={`Cultivated: ${landDetails.cultivatedLand} acres`}
                >
                  {landDetails.cultivatedLand} acres
                </div>
                <div 
                  style={{ 
                    flex: parseInt(landDetails.barrenLand),
                    background: '#f44336',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.8rem'
                  }}
                  title={`Barren: ${landDetails.barrenLand} acres`}
                >
                  {landDetails.barrenLand} acres
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', background: '#4caf50', borderRadius: '50%' }}></div>
                  <span>Cultivated Land</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', background: '#f44336', borderRadius: '50%' }}></div>
                  <span>Barren Land</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card">
        <h2>Farm Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <div className="stat-card">
            <FaSeedling style={{ fontSize: '1.5rem', color: '#4caf50', marginBottom: '0.5rem' }} />
            <div className="stat-number">12</div>
            <div>Active Crops</div>
          </div>
          <div className="stat-card">
            <FaTractor style={{ fontSize: '1.5rem', color: '#ff9800', marginBottom: '0.5rem' }} />
            <div className="stat-number">5</div>
            <div>Machines Rented</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">23</div>
            <div>Workers Hired</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div>Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
