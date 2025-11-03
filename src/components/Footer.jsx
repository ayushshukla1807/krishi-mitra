import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}>
            <FaLeaf />
            <span>Krishi Mitra</span>
          </div>
          <p>Your trusted partner in modern farming. Empowering farmers with technology and knowledge.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/crops">Crop Management</Link>
          <Link to="/pest-detection">Pest Detection</Link>
          <Link to="/market-prices">Market Prices</Link>
          <Link to="/community">Community Forum</Link>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <Link to="/weather">Weather Forecast</Link>
          <Link to="/machine-rental">Machine Rental</Link>
          <Link to="/pest-detection">Disease Detection</Link>
          <Link to="/market-prices">Price Analytics</Link>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: support@krishimitra.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Agricultural Technology Park, Pune, Maharashtra</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Krishi Mitra. All rights reserved. | Developed for Farmers, By Farmers</p>
      </div>
    </footer>
  );
};

export default Footer;
