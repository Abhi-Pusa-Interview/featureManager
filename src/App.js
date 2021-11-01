import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import data from './constants/dynamic.json';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/"><Main data={data}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
