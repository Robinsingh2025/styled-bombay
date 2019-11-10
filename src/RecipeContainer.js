import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './layout/Header';
import RecipePage from './layout/RecipePage';

function getRecipeById(id) {
  console.log(id);

  return fetch(`/data/${id}.json`)
    .then(response => {
      console.log(response);

      return response.json();
    })
    .then(json => {
      console.log(json);
      return 'help';
    });
}

export default function RecipeContainer() {
  const { recipeId } = useParams();
  const [recipeItem, setRecipeItem] = useState(null);
  useEffect(() => {
    // getRecipeById(recipeId).then(item => {
    //   console.log(item);
    //   setRecipeItem(item);
    // });
    getRecipeById(recipeId);
  }, [recipeId]);
  if (recipeItem === null) return <p>Loading</p>;
  return (
    <>
      {/* <Header /> */}
      <RecipePage item={recipeItem} />
    </>
  );
}
