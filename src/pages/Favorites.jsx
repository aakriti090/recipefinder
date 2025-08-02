import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getFavorites, removeFavorite } from '../api/favoriteAPI';
import RecipeCard from '../components/RecipeCard';

export default function Favorites() {
  const { user } = useAuth();             // Get current logged-in user
  const [favorites, setFavorites] = useState([]); // Store favorite recipes

  // Fetch user's favorite recipes when component mounts or user changes
  useEffect(() => {
    const fetch = async () => {
      if (user) {
        const favs = await getFavorites(user.uid);  // Get favorites from API
        setFavorites(favs);                          // Update state
      }
    };
    fetch();
  }, [user]);

  // Handle removing a recipe from favorites
  const handleRemove = async (recipe) => {
    await removeFavorite(user.uid, recipe.id);      // Remove from backend
    setFavorites(favorites.filter(r => r.id !== recipe.id)); // Update state locally
  };

  return (
    <div className="p-6 min-h-screen" style={{ backgroundColor: '#F8ED8C' }}>
      <h2
        className="text-3xl mb-6 font-bold text-left"
        style={{ color: '#89AC46' }}
      >
        Your Favorite Recipes
      </h2>

      {/* Show message if no favorites */}
      {favorites.length === 0 ? (
        <div
          style={{
            color: '#FF8989',
            fontSize: '1.5rem',
            fontWeight: '350',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          No favorite recipes here.
        </div>
      ) : (
        // Display grid of favorite recipes
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          style={{ backgroundColor: '#D3E671', padding: '1rem', borderRadius: '8px' }}
        >
          {favorites.map((recipe) => (
            <div key={recipe.id} style={{ backgroundColor: '#FF8989', borderRadius: '8px' }}>
              <RecipeCard
                recipe={recipe}
                isFavorited={true}      // Mark as favorited
                onFavorite={handleRemove} // Pass remove handler
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
