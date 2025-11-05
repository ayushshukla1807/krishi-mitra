import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { FaLeaf, FaUser, FaSignOutAlt, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageMenu(false);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <FaLeaf />
          <span>Krishi Mitra</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: 'var(--primary-green)',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {user ? (
          <>
            {/* Desktop Navigation */}
            <div className="nav-links">
              <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>
                {t('nav.dashboard')}
              </Link>
              <Link to="/crops" className={isActive('/crops') ? 'active' : ''}>
                {t('nav.crops')}
              </Link>
              <Link to="/workers" className={isActive('/workers') ? 'active' : ''}>
                {t('nav.workers')}
              </Link>
              <Link to="/crop-suggestion" className={isActive('/crop-suggestion') ? 'active' : ''}>
                {t('nav.cropSuggestion')}
              </Link>
              <Link to="/market-prices" className={isActive('/market-prices') ? 'active' : ''}>
                {t('nav.marketPrices')}
              </Link>
              <Link to="/machine-rental" className={isActive('/machine-rental') ? 'active' : ''}>
                {t('nav.machineRental')}
              </Link>
              <Link to="/community" className={isActive('/community') ? 'active' : ''}>
                {t('nav.community')}
              </Link>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Language Switcher */}
                <div style={{ position: 'relative' }}>
                  <button 
                    className="btn btn-outline"
                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                    style={{ 
                      padding: '0.5rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FaGlobe />
                    {currentLanguage.nativeName}
                  </button>
                  
                  {showLanguageMenu && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      right: 0,
                      background: 'white',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      zIndex: 1000,
                      marginTop: '0.5rem'
                    }}>
                      {languages.map(language => (
                        <button
                          key={language.code}
                          onClick={() => changeLanguage(language.code)}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            background: 'none',
                            border: 'none',
                            textAlign: 'left',
                            cursor: 'pointer',
                            color: i18n.language === language.code ? 'var(--primary-green)' : 'var(--text-dark)',
                            fontWeight: i18n.language === language.code ? 'bold' : 'normal',
                            borderBottom: '1px solid var(--border)'
                          }}
                        >
                          {language.nativeName}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>
                  <FaUser /> {user.name}
                </Link>
                <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                  <FaSignOutAlt />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'white',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                zIndex: 1000
              }}>
                <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''} onClick={closeMobileMenu}>
                  {t('nav.dashboard')}
                </Link>
                <Link to="/crops" className={isActive('/crops') ? 'active' : ''} onClick={closeMobileMenu}>
                  {t('nav.crops')}
                </Link>
                <Link to="/workers" className={isActive('/workers') ? 'active' : ''} onClick={closeMobileMenu}>
                  {t('nav.workers')}
                </Link>
                <Link to="/crop-suggestion" className={isActive('/crop-suggestion') ? 'active' : ''} onClick={closeMobileMenu}>
                  {t('nav.cropSuggestion')}
                </Link>
                <Link to="/market-prices" className={isActive('/market-prices') ? 'active' : ''} onClick={closeMobileMenu}>
                  {t('nav.marketPrices')}
                </Link>
                <Link to="/machine-rental" className={isActive('/machine-rental') ? 'active' : ''} onClick={closeMobileMenu}>
                  {t('nav.machineRental')}
                </Link>
                <Link to="/community" className={isActive('/community') ? 'active' : ''} onClick={closeMobileMenu}>
                  {t('nav.community')}
                </Link>
                
                {/* Mobile Language Switcher */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                  <strong>Language:</strong>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    {languages.map(language => (
                      <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className={`btn ${i18n.language === language.code ? 'btn-primary' : 'btn-outline'}`}
                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                      >
                        {language.nativeName}
                      </button>
                    ))}
                  </div>
                </div>

                <Link to="/profile" className={isActive('/profile') ? 'active' : ''} onClick={closeMobileMenu}>
                  <FaUser /> {t('nav.profile')}
                </Link>
                <button onClick={handleLogout} className="btn btn-outline" style={{ marginTop: '0.5rem' }}>
                  <FaSignOutAlt /> {t('nav.logout')}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="auth-buttons">
            {/* Language Switcher for non-logged in users */}
            <div style={{ position: 'relative', marginRight: '1rem' }}>
              <button 
                className="btn btn-outline"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                style={{ 
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <FaGlobe />
                {currentLanguage.nativeName}
              </button>
              
              {showLanguageMenu && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                  marginTop: '0.5rem'
                }}>
                  {languages.map(language => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: i18n.language === language.code ? 'var(--primary-green)' : 'var(--text-dark)',
                        fontWeight: i18n.language === language.code ? 'bold' : 'normal',
                        borderBottom: '1px solid var(--border)'
                      }}
                    >
                      {language.nativeName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/login" className="btn btn-outline">
              {t('nav.login')}
            </Link>
            <Link to="/register" className="btn btn-primary">
              {t('nav.register')}
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block !important;
          }
          .nav-links {
            display: none !important;
          }
          .auth-buttons {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
