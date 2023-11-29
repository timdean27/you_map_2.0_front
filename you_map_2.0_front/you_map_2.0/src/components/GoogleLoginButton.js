import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const redirectUri = 'http://localhost:3001/callback';
    const clientId = '183191142084-gari9r8ulmk9g85ul19h5dh7tfvqqfu3.apps.googleusercontent.com';

    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email`;

    window.location.href = authUrl;
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
