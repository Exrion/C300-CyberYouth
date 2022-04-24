import './App.css';
import React, { Component, lazy } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import AddTutorial from "./components/add-tutorial.component";
// import Tutorial from "./components/tutorial.component";
// import TutorialsList from "./components/tutorials-list.component";

const TutorialsList = lazy(() => import('./components/tutorials-list.js'));
const AddTutorial = lazy(() => import('./components/add-tutorial.js'));
const Tutorial = lazy(() => import('./components/tutorial.js'));

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/tutorials" className="navbar-brand">
                bezKoder
              </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/tutorials" className="nav-link">
                    Tutorials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add" className="nav-link">
                    Add
                  </Link>
                </li>
              </div>
            </nav>
            <div className="container mt-3">
              <Routes>
                <Route exact path="/tutorials" element={<TutorialsList />} />
                <Route exact path="/add" element={<AddTutorial />} />
                <Route path="/tutorials/:id" element={<Tutorial />} />
              </Routes>
            </div>
        </div>
      </>
    );
  }
}

export default App;
