import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { Character } from '../pages/Character';

const App = () => {
  return (
    <HashRouter basename="/">
      <BrowserRouter>
        <Switch>
          <Route exact path="/:page?" component={Home} />
          <Route exact path="/character/:id" component={Character} />
        </Switch>
      </BrowserRouter>
    </HashRouter>
  );
};

export default App;
