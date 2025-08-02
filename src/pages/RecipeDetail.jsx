import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRecipeById } from '../api/recipeAPI';

export default function RecipeDetail() {
  const { id } = useParams();             // Get recipe ID from URL params
  const [recipe, setRecipe] = useState(null); // Store recipe details

  // Fetch recipe details when component mounts or id changes
  useEffect(() => {
    const getRecipe = async () => {
      const data = await fetchRecipeById(id); // Fetch recipe info from API
      setRecipe(data);                        // Save data in state
    };
    getRecipe();
  }, [id]);

  // Show loading while data is being fetched
  if (!recipe) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#FFF8E7] rounded shadow">
      {/* Recipe title */}
      <h1 className="text-3xl font-bold mb-4 text-[#5D7A1F]">{recipe.title}</h1>

      {/* Recipe image */}
      <img src={recipe.image} alt={recipe.title} className="w-full rounded mb-4" />

      {/* Ready time and servings */}
      <p className="text-lg mb-2"><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
      <p className="text-lg mb-2"><strong>Servings:</strong> {recipe.servings}</p>

      {/* Ingredients list */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.extendedIngredients?.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      {/* Cooking instructions */}
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <p className="whitespace-pre-wrap">{recipe.instructions || "Instructions not available."}</p>
    </div>
  );
}
