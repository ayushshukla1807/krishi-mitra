import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Crops from './pages/Crops';
import PestDetection from './pages/PestDetection';
import Weather from './pages/Weather';
import MarketPrices from './pages/MarketPrices';
import MachineRental from './pages/MachineRental';
import Community from './pages/Community';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/pest-detection" element={<PestDetection />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/market-prices" element={<MarketPrices />} />
              <Route path="/machine-rental" element={<MachineRental />} />
              <Route path="/community" element={<Community />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
