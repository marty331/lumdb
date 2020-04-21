import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/1">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/:page" component={MoviesList} />
        <Route path="/detail/:id" component={MovieDetail} />

      </Switch>
    </div>
  </Router>
);


export default App;
