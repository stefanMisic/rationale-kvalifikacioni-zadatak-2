import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { HomeContainer, TestContainer } from './features/home'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/test" component={TestContainer} />
    </Switch>
  </div>
);

export default App;
