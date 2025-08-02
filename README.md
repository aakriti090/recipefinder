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
   VITE_SPOONACULAR_API_KEY=your_api_key_here
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

## Author

Aakriti – [GitHub](https://github.com/aakriti090)