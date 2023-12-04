// LogoutButton.js
import React from 'react';
import { firebaseApp, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
const LogoutButton = ({setIsLoggedIn, setUserCredentials}) => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Use auth from firebase, not firebaseApp
      console.log('Logout successful');
      setIsLoggedIn(false);
      setUserCredentials('');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
