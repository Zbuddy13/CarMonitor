import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SearchPage from './components/SearchPage';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import MessagesPage from './components/MessagesPage';
import ChargingPage from './components/ChargingPage';
import './styles/Dashboard.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/charging" element={<ChargingPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;