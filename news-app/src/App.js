import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import About from './pages/About';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
   <Router>
     <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/SearchPage" exact component={SearchPage} />
      </Switch>
   </Router>
  );
}

export default App;
