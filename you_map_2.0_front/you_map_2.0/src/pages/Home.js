import React from 'react';

const Home = ({ userEmail }) => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>User Email: {userEmail}</p>
    </div>
  );
};

export default Home;
