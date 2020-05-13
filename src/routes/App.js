import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import { Character } from '../pages/Character';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Character} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
