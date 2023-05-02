import React from "react";
import "./Recipe.css";

const Recipe = ({ title, imgUrl, ingredients, dietLabels, healthLabels, calories, cuisineType }) => {
  // console.log(ingredients)
  return (
    <div className="recipe">
      <div className="recipe-header">
        <img src={imgUrl} alt={`${title}-image`} />
        <div className="recipe-brief">
          <h2 className="recipe-title">{title}</h2>
          <p className="header-description">
            {dietLabels.map((dietLabel) => (
              <span>{dietLabel} &nbsp; &bull; &nbsp; </span>
            ))}
            {healthLabels.map((healthLabel) => (
              <span>{healthLabel} &nbsp; &bull; &nbsp; </span>
            ))}
          </p>
        </div>
      </div>
      <hr />
      <div className="recipe-description">
        <div className="recipe-specs">
          <h3>
            Specs
          </h3>
              <ul>
                <li>Calories: {Math.ceil(calories)} Kcal</li>
                <li>Cuisine Type: {cuisineType}</li>
                <li></li>
              </ul>
        </div>
        <div className="recipe-ingredients">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
