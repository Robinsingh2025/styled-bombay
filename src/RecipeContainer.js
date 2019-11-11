import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipePage from "./layout/RecipePage";

function getRecipeById(id) {
  return fetch(`/data/${id}.json`).then(response => response.json());
}

export default function RecipeContainer() {
  const { recipeId } = useParams();
  const [recipeItem, setRecipeItem] = useState(null);
  useEffect(() => {
    getRecipeById(recipeId).then(item => setRecipeItem(item));
  }, [recipeId]);
  if (recipeItem === null) return <p>Loading</p>;
  return <RecipePage item={recipeItem} />;
}
