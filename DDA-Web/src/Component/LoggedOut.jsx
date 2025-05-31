import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Loggedout.css';

const LogoutButton = () => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <Link to="/signUp">
      <button className="logout-btn" onClick={logout}>
        <FiLogOut style={{ fontSize: '18px' }} />
        Logout
      </button>
    </Link>
  );
};

export default LogoutButton;
