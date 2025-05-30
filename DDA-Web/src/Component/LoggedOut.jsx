import React, {useEffect} from 'react';
import { FiLogOut } from 'react-icons/fi'; // Or use BiLogOut, MdLogout, etc.
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const LogoutButton = () => {
  const logout =()=>{
    localStorage.clear();
    return <Navigate to="/signUp" replace />;


  }

  return (
    <Link to={"/signUp"}>
    <button  style={styles.button} onClick={logout}>
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
    backgroundColor: '#003add',
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
