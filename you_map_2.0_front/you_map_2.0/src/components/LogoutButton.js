import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions, such as clearing tokens from state or local storage
    console.log('Logout successful');

    // Redirect to the home page or another route
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
