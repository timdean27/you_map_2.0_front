// LogoutButton.js
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const LogoutButton = () => {
  const handleLogout = () => {
    try {
      firebase.auth().signOut();
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
