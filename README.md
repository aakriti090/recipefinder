# 🍽️ RecipeFinder

**RecipeFinder** is a modern and responsive React web application that allows users to discover delicious recipes, view detailed cooking instructions, and manage their favorite meals. The app supports user authentication, secure route access, and is styled with Tailwind CSS and animated with Framer Motion.

---

## Features

- **User Authentication** (Signup, Login, Logout)
- **Recipe Search** using third-party API
- **Recipe Details Page**
- **Favorite Recipes** (Add to Favorites, view Favorites page)
- **Private Route Protection**
- **Glowing Navbar** with smooth transitions
- **React Context API** for global auth state
- **React Router DOM** for client-side routing
- **Tailwind CSS** for a modern, clean design

---

## Folder Structure

```
src/
├── api/                    # API calls (e.g., Spoonacular or custom backend)
│   ├── recipeAPI.js
│   └── favoriteAPI.js
│
├── components/             # Reusable UI components
│   ├── Navbar.jsx
│   └── PrivateRoute.jsx
|   |__ RecipeCard.jsx
│
├── context/                # Global auth context provider
│   └── AuthContext.jsx
│
├── pages/                  # Page-level components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Favorites.jsx
│   └── RecipeDetail.jsx
│
├── App.jsx                 # Main app with route configuration
├── main.jsx                # React root render
└── index.css               # Tailwind base styles
```

---

## Getting Started

### Prerequisites

- Node.js & npm
- React setup (e.g., Vite or Create React App)
- Firebase project (for authentication)
- API Key from [Spoonacular API](https://spoonacular.com/food-api) or similar

### Create a `.env` file in the root and add:
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


### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/recipe-finder.git
cd recipe-finder

# Install dependencies
npm install

# Start the development server
npm run dev
```

---


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


## Firebase Auth Setup (If using Firebase)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a project
3. Enable **Email/Password Authentication**
4. In `AuthContext.jsx`, replace the config with your Firebase settings:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "yourapp",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "123456789",
  appId: "your_app_id",
};
```

---

## Recipe API Setup

1. Go to [Spoonacular API](https://spoonacular.com/food-api)
2. Sign up and get an API key
3. Store it in a `.env` file:

```bash
VITE_API_KEY=your_spoonacular_api_key
```

4. In `recipeAPI.js`, use this key for API calls.

---

## Routing Structure

| Route           | Component        | Access      |
|----------------|------------------|-------------|
| `/`            | `Home`           | Public      |
| `/login`       | `Login`          | Public      |
| `/signup`      | `Signup`         | Public      |
| `/favorites`   | `Favorites`      | **Private** |
| `/recipe/:id`  | `RecipeDetail`   | Public      |

---

## Key Functionalities Explained

### PrivateRoute

Only allows access to the `/favorites` route if the user is authenticated. If not, redirects to `/login`.

```jsx
<Route
  path="/favorites"
  element={
    <PrivateRoute>
      <Favorites />
    </PrivateRoute>
  }
/>
```

### AuthContext

Provides `user`, `login`, `signup`, and `logout` methods throughout the app using React Context API.

### API Integration

All recipe search and details data are fetched from Spoonacular or any other API using `fetchRecipes()` in `recipeAPI.js`.

---

## UI & Styling

- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **Glow Effects**: Applied on navbar bottom border using `box-shadow`.
- **Responsive Design**: Fully mobile-friendly layout.
- **Hover Transitions**: Smooth hover transitions on buttons and links.


---

## License

This project is licensed under the **MIT License** — feel free to use and modify!
