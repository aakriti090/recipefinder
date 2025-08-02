import { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/recipeAPI';
import { useAuth } from '../context/AuthContext';
import { addFavorite, getFavorites, removeFavorite } from '../api/favoriteAPI';
import RecipeCard from '../components/RecipeCard';

export default function Home() {
  const [query, setQuery] = useState('');         // Search query input
  const [recipes, setRecipes] = useState([]);     // List of recipes fetched
  const [diet, setDiet] = useState('');           // Diet filter
  const [page, setPage] = useState(0);            // Pagination page index
  const [favorites, setFavorites] = useState([]); // User's favorite recipes
  const { user } = useAuth();                      // Get current user

  // Fetch user favorites when user logs in or changes
  useEffect(() => {
    const loadFavorites = async () => {
      if (user) {
        const favs = await getFavorites(user.uid);
        setFavorites(favs);
      }
    };
    loadFavorites();
  }, [user]);

  // Fetch recipes based on search criteria and page
  const search = async () => {
    const data = await fetchRecipes(query, '', diet, page * 10);
    setRecipes(data.results);
  };

  // Run search when page changes
  useEffect(() => {
    search();
  }, [page]);

  // Add or remove recipe from favorites
  const handleToggleFavorite = async (recipe) => {
    const isFav = favorites.some(fav => fav.id === recipe.id);
    if (isFav) {
      await removeFavorite(user.uid, recipe.id);
      setFavorites(favorites.filter(f => f.id !== recipe.id));
    } else {
      await addFavorite(user.uid, recipe);
      setFavorites([...favorites, recipe]);
    }
  };

  // Check if a recipe is favorited by user
  const isRecipeFavorited = (id) => favorites.some(fav => fav.id === id);

  return (
    <div className="bg-[#F8ED8C]">
      {/* Welcome Section with background image and text */}
      <section
        className="w-full h-[60vh] relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6400b0729a43c47a/66707e04cd91a56a4cdd187a/cooking-therapy-hero.jpeg?q=70&width=3840&auto=webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-[#D3E671] mb-4 drop-shadow-md">
            Welcome to Recipe Finder
          </h1>
          <p className="text-xl italic text-white mb-2 drop-shadow">
            “Cooking is at once child’s play and adult joy. And cooking done with care is an act of love.”
          </p>
          <p className="text-lg text-[#FF8989] font-medium drop-shadow">
            Find your next favorite recipe today!
          </p>
        </div>
      </section>

      {/* Search Section: input, diet filter, and search button */}
      <div className="w-full px-4 py-8 bg-[#F8ED8C]">
        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-6xl mx-auto mb-6">
          <input
            className="border border-[#D3E671] p-2 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#89AC46]"
            placeholder="Search recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            onChange={(e) => setDiet(e.target.value)}
            className="border border-[#D3E671] p-2 rounded w-full sm:w-1/4 bg-white focus:outline-none"
          >
            <option value="">All</option>
            <option value="vegan">Vegan</option>
            <option value="gluten free">Gluten Free</option>
          </select>
          <button
            onClick={search}
            className="bg-[#89AC46] text-white px-6 py-2 rounded hover:bg-[#6f8c36] transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Recipe Grid displaying fetched recipes */}
      <div className="px-6 sm:px-8 md:px-12 py-4 bg-[#F8ED8C]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onFavorite={handleToggleFavorite}          // Pass toggle favorite handler
              isFavorited={isRecipeFavorited(recipe.id)} // Check if favorited
            />
          ))}
        </div>
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-between items-center px-6 sm:px-12 py-8 bg-[#F8ED8C]">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}  // Previous page (not below 0)
          className="px-4 py-2 bg-[#FF8989] text-white rounded hover:bg-red-500 transition"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)} // Next page
          className="px-4 py-2 bg-[#D3E671] text-black rounded hover:bg-[#c2d95f] transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
