import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function getRecipeItemList() {
  return fetch("/data/list.json").then(response => response.json());
}

export default function RecipeItemList() {
  const [recipesItems, setRecipeItems] = useState(null);
  useEffect(() => {
    getRecipeItemList().then(({ recipeItemList }) =>
      setRecipeItems(recipeItemList)
    );
  }, []);
  if (recipesItems === null) return <p>Loading</p>;
  return (
    <ul>
      {recipesItems.map(item => (
        <Link key={item.id} to={`/app/${item.id}`}>
          {item.name}
        </Link>
      ))}
    </ul>
  );
}
