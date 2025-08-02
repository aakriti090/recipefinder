import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth(); // Get user and logout function from context
  const navigate = useNavigate();     // React Router hook for programmatic navigation

  // Handles user logout and redirects to login page
  const handleLogout = async () => {
    try {
      await logout();         // Call logout function from context
      navigate('/login');     // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error); // Log error if logout fails
    }
  };

  return (
    <nav
      className="bg-[#FFFCD3] text-[#333] px-6 py-4 flex items-center justify-between"
      style={{
        boxShadow: '0 4px 8px rgba(176, 211, 94, 0.8)',  // Shadow effect below navbar
        borderBottom: '5px  solid rgb(106, 125, 55)',    // Green bottom border
      }}
    >
      {/* Brand name with icon */}
      <Link to="/" className="text-2xl font-extrabold text-[#6f8c36] transition">
        🍽️ RecipeFinder
      </Link>

      {/* Navigation links */}
      <div className="space-x-4 font-medium">
        <Link to="/" className="hover:text-[#FF8989] transition">Home</Link>

        {/* Show 'Favorites' only if user is logged in */}
        {user && (
          <Link to="/favorites" className="hover:text-[#FF8989] transition">Favorites</Link>
        )}

        {/* Show login/signup links if not logged in */}
        {!user ? (
          <>
            <Link to="/login" className="hover:text-[#FF8989] transition">Login</Link>
            <Link to="/signup" className="hover:text-[#FF8989] transition">Signup</Link>
          </>
        ) : (
          // Show logout button if user is logged in
          <button onClick={handleLogout} className="hover:text-[#FF8989] transition">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
