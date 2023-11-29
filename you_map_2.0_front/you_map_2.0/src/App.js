import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleLoginButton from './components/GoogleLoginButton';
import LogoutButton from './components/LogoutButton';
import Callback from './components/CallBack';
import Home from './pages/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <Router>
      <div>
        <h1>My React App</h1>

        <Routes>
          <Route
            path="/callback"
            element={<Callback setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />}
          />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Home userEmail={userEmail} />
              ) : (
                <GoogleLoginButton
                  setIsLoggedIn={setIsLoggedIn}
                  setUserEmail={setUserEmail}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
