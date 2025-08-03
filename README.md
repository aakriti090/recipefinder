# 🍽️ Recipe Finder App

A simple web app built with **React.js** and **Tailwind CSS** that lets users search for recipes using the **Spoonacular API**. Users can log in, add recipes to favorites, and view them later.

## 🔧 Features

- Search recipes by keyword  
-  Add/remove recipes from favorites  
-  User login/signup/logout (using Firebase Auth)  
-  Handles Spoonacular API request limits  

## Getting Started

1. Clone the project:
   ```bash
   git clone https://github.com/yourusername/recipe-finder-app.git
   cd recipe-finder-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root and add:
   ```env
   # Spoonacular API Key (required for recipe search)
   VITE_SPOONACULAR_API_KEY=your_spoonacular_api_key_here
   
   # Firebase Configuration (optional - will use defaults if not provided)
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. Start the app:
   ```bash
   npm run dev
   ```

## Tech Stack

- React.js  
- Tailwind CSS  
- Firebase Authentication  
- Spoonacular API  
- React Router DOM  

## API Note

Spoonacular has a free tier limit. Too many requests or accessing detailed recipes may not work without upgrading your plan.

## Security

**Important:** This project contains sensitive API keys that should never be committed to version control. The following files are automatically ignored by git:

- `src/firebase.js` - Contains Firebase configuration
- `src/api/recipeAPI.js` - Contains Spoonacular API key

Template files are provided:
- `src/firebase.template.js` - Shows Firebase config structure
- `src/api/recipeAPI.template.js` - Shows API structure

Always use environment variables for sensitive data in production.

## Author

Aakriti – [GitHub](https://github.com/aakriti090)