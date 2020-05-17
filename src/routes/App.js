import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import { Character } from '../pages/Character';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:page?" component={Home} />
        <Route exact path="/character/:id" component={Character} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
