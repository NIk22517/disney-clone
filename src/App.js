import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';
import LogIn from './components/LogIn';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>

      <Route path="/login">
          <LogIn />
      </Route>

        <Route path="/detail">
          <Detail />
        </Route>

        <Route path="/">
            <Home />
        </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
