import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div className="header">
        <button className="add-record-btn">Add Record</button>
      <div className="user-info">
        <Link to="/search">
          <span className="icon">
            <CgProfile />
          </span>
          
        </Link>
      </div>
      </div>
  );
}

export default Header;