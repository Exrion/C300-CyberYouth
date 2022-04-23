import './App.css';
import React, { Component, lazy } from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import AddTutorial from "./components/add-tutorial.component";
// import Tutorial from "./components/tutorial.component";
// import TutorialsList from "./components/tutorials-list.component";

const TutorialsList = lazy(() => import('./components/tutorials-list.component.js'));
const AddTutorial = lazy(() => import('./components/add-tutorial.component.js'));
const Tutorial = lazy(() => import('./components/tutorial.component.js'));

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <BrowserRouter>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/tutorials" className="navbar-brand">
                bezKoder
              </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/tutorials"} className="nav-link">
                    Tutorials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Add
                  </Link>
                </li>
              </div>
            </nav>
            <div className="container mt-3">
              <Routes>
                {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
              <Route exact path="/add" component={AddTutorial} />
              <Route path="/tutorials/:id" component={Tutorial} /> */}
                <Route path="/tutorials" Component={<TutorialsList />} />
                <Route path="/add" Component={<AddTutorial />} />
                <Route path="/tutorials/:id" Component={<Tutorial />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
