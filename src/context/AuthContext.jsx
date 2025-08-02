import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext(); // Create context for authentication

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Store current user state

  // Listen for authentication state changes (login/logout)
  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  // Signup function using Firebase
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // Login function using Firebase
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Logout function using Firebase
  const logout = () => signOut(auth);

  // Provide user and auth functions to child components
  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context in components
export const useAuth = () => useContext(AuthContext);