// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { app } from './firebase'; // Adjust the path based on your project structure
import GoogleLoginButton from './components/GoogleLoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './pages/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState('');
  const [firebaseData, setFirebaseData] = useState([]);

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

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      setIsLoggedIn(true);
      setUserCredentials(result.user); // Save user credentials if needed
    } catch (error) {
      console.error('Google login error:', error.message);
    }
  };

  const handleLogout = () => {
    try {
      firebase.auth().signOut();
      console.log('Logout successful');
      setIsLoggedIn(false);
      setUserCredentials('');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <Router>
      <div>
        <h1>My React App</h1>

        {/* Display the buttons outside of Routes */}
        {isLoggedIn ? (
          <div>
            {console.log("user logged in", "userCredentials", userCredentials)}
            <LogoutButton handleLogout={handleLogout} />
          </div>
        ) : (
          <div>
            {console.log("user logged out", "userCredentials", userCredentials)}
            <GoogleLoginButton handleGoogleLogin={handleGoogleLogin} />
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={<Home userCredentials={userCredentials} firebaseData={firebaseData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
