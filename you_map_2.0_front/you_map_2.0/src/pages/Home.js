// Home.js
import React from 'react';

const Home = ({ userCredentials, firebaseData }) => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>User Credentials: {JSON.stringify(userCredentials)}</p>
      <p>Data from Firebase: {JSON.stringify(firebaseData)}</p>
    </div>
  );
};

export default Home;
