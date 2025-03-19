import React from 'react';

function Metrics() {
  return (
    <div className="metrics">
      <div className="metric-card charging-today">
        <h3>Charging Today</h3>
        <p>1 GW</p>
      </div>
      <div className="metric-card alerts">
        <h3>Alerts</h3>
        <p>200</p>
      </div>
      <div className="metric-card sessions">
        <h3>Sessions</h3>
        <p>100</p>
      </div>
      <div className="metric-card in-use">
        <h3>In Use</h3>
        <p>12.8%</p>
      </div>
      <div className="chart-section">
        <h3>Charging Cost</h3>
        <div className="chart-placeholder">
          {/* Placeholder for chart - you can use a library like Chart.js */}
          <svg width="300" height="150">
            <path d="M10 130 Q 50 100 90 130 Q 130 160 170 110 Q 210 90 250 120" stroke="black" fill="transparent"/>
          </svg>
        </div>
      </div>
      <div className="ratio-section">
        <h3>Ratio</h3>
        <div className="pie-chart-placeholder">
          {/* Placeholder for pie chart */}
          <div className="pie-segment guest"></div>
          <div className="pie-segment tenants"></div>
          <div className="legend">
            <span>Guest</span>
            <span>Tenants</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metrics;