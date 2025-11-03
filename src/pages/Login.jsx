import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    
    try {
      await login(formData.email, formData.password);
      setMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
      setMessage('Login successful! (Demo Mode)');
      setTimeout(() => navigate('/dashboard'), 1000);
    }
  };

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <div className="page-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your Krishi Mitra account</p>
          <div style={{ background: '#e8f5e8', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#2d5016' }}>
              <strong>DEMO:</strong> Use any email/password
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {message && (
            <div className={`alert ${message.includes('successful') ? 'alert-success' : 'alert-error'}`}>
              {message}
            </div>
          )}

          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
            {loading ? (
              <>
                <div className="spinner" style={{ width: '20px', height: '20px', display: 'inline-block', marginRight: '10px' }}></div>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
