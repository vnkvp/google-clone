import React from 'react';
import Home from './pages/Home';
import SearchPage from './components/SearchPage';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/App.css';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/search'>
            <SearchPage />
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
