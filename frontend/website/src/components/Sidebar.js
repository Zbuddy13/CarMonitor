import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaCog, FaEnvelope, FaCarAlt } from 'react-icons/fa'; // Import icons

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <Link to="/search">
          <span className="icon">
            <FaSearch />
          </span>
          
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/home">
          <span className="icon">
            <FaHome />
          </span>
          
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/settings">
          <span className="icon">
            <FaCarAlt />
          </span>
          
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/messages">
          <span className="icon">
            <FaEnvelope />
          </span>
          
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/charging">
          <span className="icon">
            <FaCog />
          </span>
          
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;