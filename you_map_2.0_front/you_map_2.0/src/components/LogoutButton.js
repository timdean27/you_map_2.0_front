// LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ setIsLoggedIn, setUserCredentials }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions, such as clearing tokens from state or local storage
    console.log('Logout successful');

    // Clear user credentials
    setUserCredentials('');

    // Set isLoggedIn to false
    setIsLoggedIn(false);

    // Redirect to the home page or another route
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;



