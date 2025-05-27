import React from 'react';
import { FaUserCheck } from 'react-icons/fa'; // Logged-in person icon

const LoggedInUser = ({ username }) => {
  return (
    <div style={styles.container}>
      <FaUserCheck style={styles.icon} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '18px',
    fontWeight: '500',
  },
  icon: {
    color: '#4CAF50',
    fontSize: '24px',
  },
  text: {
    color: '#333',
  },
};

export default LoggedInUser;
