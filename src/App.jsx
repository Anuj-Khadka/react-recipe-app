import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const APP_ID = "22c0f465";

  const APP_KEY = "82a6a7f5d80e34046635519c08bd88e0";

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          value={search}
          className="search-bar"
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.length
        ? recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              imgUrl={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              dietLabels={recipe.recipe.dietLabels}
              healthLabels={recipe.recipe.healthLabels}
            />
          ))
        : "No Recipe found"}
    </div>
  );
}

export default App;
