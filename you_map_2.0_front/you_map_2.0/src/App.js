import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleLoginButton from './components/GoogleLoginButton';
import CallBack from './components/CallBack';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          <Route path="/callback" element={<CallBack />} />
          <Route path="/" element={<GoogleLoginButton />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
