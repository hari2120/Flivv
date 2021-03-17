import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home/Home';
import Create from './components/create/Create';
import Edit from './components/Edit/Edit';


function App() {
  return (
    <div className="">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Flivv Expense Tracker</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Create">Create</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Edit">Edit</Link>
              </li>
            
            </ul>
          </div>
        </nav>

      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Edit">
            <Edit />
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

