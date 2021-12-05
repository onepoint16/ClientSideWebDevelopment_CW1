import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Home = () => (
  <div>
  <h2>Home</h2>
  </div>
);

const Itinerary = () => (
  <div>
  <h2>Itinerary</h2>
  </div>
);

const Hostles = () => (
  <div>
  <h2>Hostles</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/itinerary">Itinerary</Link>
          </li>
          <li>
            <Link to="/hostles">Hostles</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/"><Home /></Route>
        <Route path="/itinerary"><Itinerary /></Route>
        <Route path="/hostles"><Hostles /></Route>
      </Switch>
    </div>
  );
}