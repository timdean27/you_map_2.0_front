import React from 'react';

const Home = ({ userCredentials }) => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>User Emails: {userCredentials.email}</p>
      {console.log(userCredentials)}
    </div>
  );
};

export default Home;
