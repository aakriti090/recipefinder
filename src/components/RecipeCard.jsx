import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe, onFavorite, isFavorited = false }) {
  const [liked, setLiked] = useState(isFavorited); // Track if recipe is liked (favorited)

  // Toggle favorite status and notify parent component
  const toggleFavorite = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onFavorite(recipe); // Let parent handle adding/removing from favorites
  };

  return (
    <div
      className="border rounded p-4"
      style={{
        boxShadow: '0 4px 10px rgba(255, 255, 255, 0.6)',
        backgroundColor: '#fff',
      }}
    >
      {/* Image links to recipe detail page */}
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover rounded hover:scale-105 transition duration-300 ease-in-out"
        />
      </Link>

      {/* Recipe title */}
      <h3 className="mt-2 font-semibold">{recipe.title}</h3>

      {/* Favorite (heart) button */}
      <button
        onClick={toggleFavorite}
        aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
        className="mt-2 focus:outline-none"
        style={{ cursor: 'pointer' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={liked ? '#FF4C4C' : 'none'}  // Fill heart if liked
          stroke="#FF4C4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 transition-all duration-300 ease-in-out"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.72-7.72 1.06-1.06a5.5 5.5 0 0 0 0-7.84z" />
        </svg>
      </button>
    </div>
  );
}
