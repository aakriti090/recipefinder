import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Component to protect routes that require authentication
export default function PrivateRoute({ children }) {
  const { user } = useAuth(); // Get current user from auth context

  // If user is logged in, render the child components
  // Otherwise, redirect to the login page
  return user ? children : <Navigate to="/login" />;
}
