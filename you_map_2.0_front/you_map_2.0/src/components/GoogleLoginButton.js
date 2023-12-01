// GoogleLoginButton.js
import React from 'react';
import { auth } from '../firebase'; // Adjust the path based on your project structure

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
      const result = await auth().signInWithPopup(provider);
      // Handle successful login
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.warn('Google login canceled by the user.');
        // You can provide a user-friendly message or take other actions as needed.
      } else {
        console.error('Google login error:', error.message);
      }
    }
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
