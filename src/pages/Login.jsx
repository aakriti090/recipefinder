import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');         // Store email input
  const [password, setPassword] = useState('');   // Store password input
  const [errorMsg, setErrorMsg] = useState('');   // Store error message if login fails
  const { login } = useAuth();                     // Get login function from auth context
  const navigate = useNavigate();                  // For navigation after login

  // Handle form submit to log in user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);  // Attempt login
      setErrorMsg('');               // Clear errors on success
      navigate('/');                 // Redirect to home page
    } catch (err) {
      setErrorMsg('Login failed. Not signed in yet.');  // Show error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAF7F3' }}>
      <form onSubmit={handleSubmit} className="p-6 rounded shadow-md w-full max-w-md" style={{ backgroundColor: '#F0E4D3' }}>
        <h2 className="text-2xl mb-4 text-center font-bold" style={{ color: '#D9A299' }}>Login</h2>

        {/* Show error message if login failed */}
        {errorMsg && (
          <div className="text-red-600 mb-3 text-sm text-center">{errorMsg}</div>
        )}

        {/* Email input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 rounded border border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded border border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-2 rounded font-semibold text-white"
          style={{ backgroundColor: '#D9A299' }}
        >
          Login
        </button>

        {/* Link to Signup page */}
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="ml-2 underline text-blue-600 hover:text-blue-800"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
