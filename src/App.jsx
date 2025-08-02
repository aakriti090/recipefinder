import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorites from './pages/Favorites';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import RecipeDetail from './pages/RecipeDetail';  // Import RecipeDetail page

function App() {
  return (
    // Provide authentication context to all components
    <AuthProvider>
      <BrowserRouter>
        <Navbar />  {/* Navigation bar visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />                {/* Home page */}
          <Route path="/login" element={<Login />} />          {/* Login page */}
          <Route path="/signup" element={<Signup />} />        {/* Signup page */}

          {/* Protected route for Favorites page (only for logged-in users) */}
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />

          {/* Recipe detail page with dynamic recipe ID */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
