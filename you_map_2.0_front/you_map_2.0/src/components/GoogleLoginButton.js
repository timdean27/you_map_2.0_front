// GoogleLoginButton.js
import React, { useState } from 'react';
import { signInWithGooglePopup } from '../firebase';
import { useNavigate } from 'react-router-dom';
const GoogleLoginButton = ({ onLoginSuccess }) => {
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGooglePopup();
      onLoginSuccess(result.user); // Notify parent component about the login success

    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.warn('Google login canceled by the user.');
        // Handle the canceled login if needed
      } else {
        console.error('Google login error:', error.message);
        setLoginError('Google login failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default GoogleLoginButton;

