import React from "react";
import './Recipe.css';

const Recipe = ({ title, imgUrl, ingredients, dietLabels, healthLabels }) => {
    // console.log(ingredients)
  return (
    <div className="recipe">
      <div className="recipe-header">
        <img src={imgUrl} alt={`${title}-image`} />
        <div className="recipe-brief">
          <h2 className="recipe-title">{title}</h2>
          <p className="header-description">
            {
                dietLabels.map(dietLabel=>(
                    <span>{dietLabel} &nbsp; &bull; &nbsp; </span>  
                ))
            }
            {
                healthLabels.map(healthLabel=>(
                    <span>{healthLabel}  &bull; </span>
                ))
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
