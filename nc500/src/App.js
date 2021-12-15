import React, { Component }from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";

import Itinerary from "./components/itinerary/itinerary";
import Hostels from "./components/hostels/hostels";
import Hostel from './components/hostel/hostel';

const Home = () => (
  <div>
    <h2>Discover the North Coast 500</h2>
    <h3>Scotland's ultimate road trip</h3>
    <img width="350px" height="350px" src="./nc500-map.png"/>
    <p>Bringing together a route of just over 500 miles (516 to be exact…) of stunning coastal scenery, 
      white sandy beaches, rugged mountains, remote fishing villages, hidden gems, and a wealth of unforgettable experiences; 
      the North Coast 500 is one of the world's most beautiful road trips. Whether you're looking for an action-packed break, 
      a chance to relax or simply want to see more of the North Highlands' breath-taking scenery, you will find it on the NC500. 
      Start planning your next adventure today.</p>
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
                <Route path="hostel" element={<Hostel />} />
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
