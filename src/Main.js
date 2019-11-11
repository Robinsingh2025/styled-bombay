import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import RecipeContainer from "./RecipeContainer";
import RecipeItemList from "./RecipeItemList";

export default function Main() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:recipeId`}>
        <RecipeContainer />
      </Route>
      <Route path={match.path}>
        <RecipeItemList />
      </Route>
    </Switch>
  );
}
