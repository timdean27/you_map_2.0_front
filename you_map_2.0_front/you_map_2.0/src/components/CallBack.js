// Callback.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Callback = ({ setIsLoggedIn, setUserCredentials }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(location.hash.substring(1));
      const accessToken = params.get('access_token');

      if (accessToken) {
        try {
          // Fetch user details from Google using the access token
          const userDetailsResponse = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (userDetailsResponse.ok) {
            const userDetails = await userDetailsResponse.json();
            setIsLoggedIn(true);
            setUserCredentials(userDetails);
          } else {
            console.error('Failed to fetch user details from Google');
          }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      } else {
        console.error('Login error');
      }

      // Redirect to the home page or another route
      navigate('/');
    };

    handleCallback();
  }, [location, navigate, setIsLoggedIn, setUserCredentials]);

  return <div>Redirecting...</div>;
};

export default Callback;

