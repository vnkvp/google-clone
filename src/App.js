import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/App.css';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/search'>
            <h1>This is the search</h1>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
