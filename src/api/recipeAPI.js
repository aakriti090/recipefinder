import axios from 'axios';

const API_KEY = 'bc3236f6f2114ca2a5000a474e169493';

// Fetch recipes based on query, ingredients, diet, and pagination offset
export const fetchRecipes = async (query, ingredients, diet, offset = 0) => {
  const res = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
    params: {
      apiKey: API_KEY,
      query,
      includeIngredients: ingredients,
      diet,
      number: 10,  // Number of recipes to fetch per request
      offset       // For pagination
    },
  });
  return res.data;
};

// Fetch detailed information of a recipe by its ID
export const fetchRecipeById = async (id) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};
