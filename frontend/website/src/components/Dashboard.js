import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Metrics from './Metrics';
import Customers from './Customers';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Metrics />
        <Customers />
      </div>
    </div>
  );
}

export default Dashboard;