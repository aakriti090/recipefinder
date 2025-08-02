import { doc, setDoc, deleteDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

// Add a recipe to user's favorites
export const addFavorite = (userId, recipe) => {
  return setDoc(doc(db, 'users', userId, 'favorites', recipe.id.toString()), recipe);
};

// Remove a recipe from user's favorites
export const removeFavorite = (userId, recipeId) => {
  return deleteDoc(doc(db, 'users', userId, 'favorites', recipeId.toString()));
};

// Get all favorite recipes for a user
export const getFavorites = async (userId) => {
  const snapshot = await getDocs(collection(db, 'users', userId, 'favorites'));
  return snapshot.docs.map(doc => doc.data());
};
