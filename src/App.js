import React from 'react';
import './App.css';
import Form from './layout/Form';
import Home from './layout/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './Main';

export default function App() {
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
