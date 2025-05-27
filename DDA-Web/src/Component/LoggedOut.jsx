import React from 'react';
import { FiLogOut } from 'react-icons/fi'; // Or use BiLogOut, MdLogout, etc.
import { Link } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
  return (
    <Link to={"/register"}>
    <button  style={styles.button}>
      <FiLogOut style={styles.icon} />
      Logout
    </button>
    </Link>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '10px 10px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    marginLeft:"30px"
   
  },
  icon: {
    fontSize: '18px',
  },
};

export default LogoutButton;
