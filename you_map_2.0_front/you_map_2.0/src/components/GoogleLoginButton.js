import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const GoogleLoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const redirectUri = 'http://localhost:3001/callback';
    const clientId = '183191142084-gari9r8ulmk9g85ul19h5dh7tfvqqfu3.apps.googleusercontent.com';

    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email`;

    // Update the order of these lines
    window.location.href = authUrl;
    // Move the setIsLoggedIn after the user is authenticated (for example, in the Callback component)
    setIsLoggedIn(!isLoggedIn);

    // Navigate to the callback page
    navigate('/callback');
  };

  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton />
      ) : (
        <button onClick={handleGoogleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default GoogleLoginButton;
