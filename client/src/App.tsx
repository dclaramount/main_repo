import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/about'; // Example additional page
import LoginPage from './pages/login';
import ProtectedRoute from './utils/ProtectedRoute'; // Import the ProtectedRoute

const App: React.FC = () => {
  return (
    <Routes>
    {/* Public route */}
    <Route path="/login" element={<LoginPage />} />

    {/* Protected routes */}
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>

    {/* Fallback for undefined routes */}
    <Route path="*" element={<p>404 Page Not Found</p>} />
    </Routes>
  );
};

export default App;