import React, { Component }from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";

import Itinerary from "./components/itinerary";
import Hostels from "./components/hostels";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">NC500 Travel Planner</a>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                  <NavLink className="nav-link" to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to={"/itinerary"}>Itinerary</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/hostels"}>Hostels</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
  
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="hostels" element={<Hostels />} />
                <Route path="itinerary" element={<Itinerary />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
