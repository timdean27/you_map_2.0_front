import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import axios from "axios";  // Assuming you use axios for HTTP requests

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Replace this with your actual authentication check logic
    axios.get("/auth/check").then(response => {
      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
      }
    }).catch(() => {
      setIsAuthenticated(false);
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/auth" />}
      />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
