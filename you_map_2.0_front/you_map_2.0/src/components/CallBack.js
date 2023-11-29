import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Callback = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(location.hash.substring(1));
      const accessToken = params.get('access_token');

      if (accessToken) {
        // Handle successful login, e.g., save token to state or local storage
        console.log('Login successful:', accessToken);

        // Update the isLoggedIn state
        setIsLoggedIn(true);
      } else {
        // Handle login error
        console.error('Login error');
      }

      // Redirect to the home page or another route
      navigate('/');
    };

    handleCallback();
  }, [location, navigate, setIsLoggedIn]);

  return <div>Redirecting...</div>;
};

export default Callback;

