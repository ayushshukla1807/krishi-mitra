import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaLeaf, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <FaLeaf />
          <span>Krishi Mitra</span>
        </Link>

        {user ? (
          <div className="nav-links">
            <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>
              Dashboard
            </Link>
            <Link to="/crops" className={isActive('/crops') ? 'active' : ''}>
              My Crops
            </Link>
            <Link to="/pest-detection" className={isActive('/pest-detection') ? 'active' : ''}>
              Pest Detection
            </Link>
            <Link to="/machine-rental" className={isActive('/machine-rental') ? 'active' : ''}>
              Machine Rental
            </Link>
            <Link to="/weather" className={isActive('/weather') ? 'active' : ''}>
              Weather
            </Link>
            <Link to="/market-prices" className={isActive('/market-prices') ? 'active' : ''}>
              Market Prices
            </Link>
            <Link to="/community" className={isActive('/community') ? 'active' : ''}>
              Community
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>
                <FaUser /> {user.name}
              </Link>
              <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                <FaSignOutAlt />
              </button>
            </div>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
