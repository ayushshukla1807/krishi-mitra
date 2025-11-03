import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="page">
      <div className="page-header">
        <h1>👤 My Profile</h1>
        <p>Manage your account and preferences</p>
      </div>

      <div className="card">
        <h2>Personal Information</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <strong>Name:</strong> {user?.name}
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
        <h2>Account Settings</h2>
        <button className="btn btn-outline" style={{ marginRight: '1rem' }}>
          Edit Profile
        </button>
        <button className="btn btn-outline">
          Change Password
        </button>
      </div>
    </div>
  );
};
export default Profile;
