// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { firebaseApp, auth } from './firebase'; // Assuming firebaseApp and auth are correctly imported
import GoogleLoginButton from './authentication/GoogleLoginButton.js';
import LogoutButton from './authentication/LogoutButton.js';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState('');
  const [firebaseData, setFirebaseData] = useState([]);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    // Check the user's authentication state when the component mounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
        setUserCredentials(user);
      } else {
        // User is signed out
        setIsLoggedIn(false);
        setUserCredentials('');
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      if (isLoggedIn) {
        try {
          const snapshot = await firebase.database().ref('/your-database-path').once('value');
          const fetchedData = snapshot.val();
          setFirebaseData(fetchedData);
        } catch (error) {
          console.error('Error fetching data from Firebase:', error.message);
        }
      }
    };

    fetchDataFromFirebase();
  }, [isLoggedIn]);

  const handleGoogleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserCredentials(user);
    setLoginError(null);
  };

  return (
    <Router>
      <div>
        <h1>My React App</h1>

        {isLoggedIn ? (
          <div>
            {console.log("user logged in", "userCredentials", userCredentials)}
            <LogoutButton setUserCredentials={setUserCredentials} setIsLoggedIn={setIsLoggedIn} />
          </div>
        ) : (
          <div>
            {console.log("user logged out", "userCredentials", userCredentials)}
            <GoogleLoginButton onLoginSuccess={handleGoogleLoginSuccess} />
            {loginError && <p>{loginError}</p>}
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/Home" /> : <LandingPage userCredentials={userCredentials} firebaseData={firebaseData} />}
          />
          <Route
            path="/Home"
            element={isLoggedIn ? <Home userCredentials={userCredentials} firebaseData={firebaseData} /> : <Navigate to="/" />}
          />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
