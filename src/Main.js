import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RecipeContainer from './RecipeContainer';

export default function Main() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:recipeId`}>
        <RecipeContainer />
      </Route>
      <Route path={match.path}>
        <h3>Please select a topic.</h3>
      </Route>
    </Switch>
  );
}
