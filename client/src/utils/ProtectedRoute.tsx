import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import your AuthContext

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated

  // Redirect to login if not authenticated
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
