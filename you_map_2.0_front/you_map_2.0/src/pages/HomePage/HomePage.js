// Home.js
import React from 'react';
import MainMapContainer from '../../components/MainMapContainer';

const Home = ({ userCredentials, firebaseData }) => {
  const ENVtest = process.env.REACT_APP_TEST; // Corrected variable name
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {/* <h5>{ENVtest}</h5>
      {console.log("User Credentials:", userCredentials)}
      <p>{userCredentials.email}</p>
      <p>Data from Firebase: {JSON.stringify(firebaseData)}</p>
      <MainMapContainer /> */}
    </div>
  );
};

export default Home;
