import React from 'react'

const LandingPage = ({ userCredentials, firebaseData }) => {
  return (
    <div>
    <h1>LandingPage</h1>
    {console.log("User Credentials:" ,(userCredentials))}
    <p>{userCredentials.email}</p>
    <p>Data from Firebase: {JSON.stringify(firebaseData)}</p>
  </div>
  )
}

export default LandingPage