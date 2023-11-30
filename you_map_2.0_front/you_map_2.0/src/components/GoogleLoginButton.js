// GoogleLoginButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import statement

const GoogleLoginButton = ({ setIsLoggedIn, setUserEmail }) => {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleGoogleLogin = async () => {
    const redirectUri = 'http://localhost:3001/callback';
// Accessing environment variables in React
const googleClientId = "183191142084-gari9r8ulmk9g85ul19h5dh7tfvqqfu3.apps.googleusercontent.com"
// const googleClientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;

// Use these variables in your React application

    // Assuming you're using some library for Google OAuth
    // Adjust the following code based on the library you're using
    // This is just a generic example
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=token&scope=email`;

    window.location.href = authUrl;
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;

