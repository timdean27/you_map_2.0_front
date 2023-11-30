// App.js
// require('dotenv').config();
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleLoginButton from './components/GoogleLoginButton';
import LogoutButton from './components/LogoutButton';
import Callback from './components/CallBack';
import Home from './pages/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState('');

  return (
    <Router>
      <div>
        <h1>My React App</h1>

        {/* Display the buttons outside of Routes */}
        {isLoggedIn ? (
          <div>
            {console.log("user logged in", "userCredentails", userCredentials)}
            <LogoutButton setIsLoggedIn={setIsLoggedIn} setUserCredentials={setUserCredentials} />
          </div>
        ) : (
          <div>
            {console.log("user logged out", "userCredentails", userCredentials)}
            <GoogleLoginButton
              setIsLoggedIn={setIsLoggedIn}
              setUserCredentials={setUserCredentials}
            />
          </div>
        )}

        <Routes>
          <Route
            path="/callback"
            element={<Callback setIsLoggedIn={setIsLoggedIn} setUserCredentials={setUserCredentials} />}
          />
          <Route
            path="/"
            element={<Home userCredentials={userCredentials} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

