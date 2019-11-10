import React, { useState, useEffect } from 'react';
import RecipePage from './layout/RecipePage';
import Header from './layout/Header';
import recipeData from './RecipeData';
import './App.css';
import Form from './layout/Form';
import Home from './layout/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import Main from './Main';

export default function App() {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setData(recipeData);
  }, []);
  if (!data) {
    return <p>Loading...</p>;
  }
  console.log(recipeData);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/app'>
          <Main />
        </Route>
        <Route path='/form' component={Form} />
      </Switch>
    </Router>
  );
}
