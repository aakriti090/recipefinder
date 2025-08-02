import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  // Form state for user inputs
  const [fullName, setFullName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(''); // Error message if signup fails

  const { signup } = useAuth();  // Signup function from auth context
  const navigate = useNavigate(); // For navigation after signup

  // Handle form submit to create new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password); // Call signup with email & password
      setErrorMsg('');               // Clear errors on success
      navigate('/');                 // Redirect to home page
    } catch (err) {
      setErrorMsg('Signup failed. Try again.'); // Show error message on failure
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAF7F3' }}>
      <form onSubmit={handleSubmit} className="p-6 rounded shadow-md w-full max-w-md" style={{ backgroundColor: '#F0E4D3' }}>
        <h2 className="text-2xl mb-4 text-center font-bold" style={{ color: '#D9A299' }}>Sign Up</h2>

        {/* Show error message if signup failed */}
        {errorMsg && (
          <div className="text-red-600 mb-3 text-sm text-center">{errorMsg}</div>
        )}

        {/* Input fields for user details */}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full mb-2 p-3 rounded border border-gray-300"
        />

        <input
          type="text"
          placeholder="Middle Name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          className="w-full mb-2 p-3 rounded border border-gray-300"
        />

        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="w-full mb-2 p-3 rounded border border-gray-300"
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-2 p-3 rounded border border-gray-300"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-3 rounded border border-gray-300"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded border border-gray-300"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-2 rounded font-semibold text-white mb-3"
          style={{ backgroundColor: '#D9A299' }}
        >
          Sign Up
        </button>

        {/* Link to Login page */}
        <div className="text-center text-sm">
          Already have an account?
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="ml-2 underline text-blue-600 hover:text-blue-800"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
