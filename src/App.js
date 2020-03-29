import React, { Component } from "react";
import { Route, Switch, withRouter, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import routes from "./Routes";
import logo from "./logoPokemon.png";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <div className="container">
            <Navbar className="app-navbar">
              <Link to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </Navbar>
          </div>
        </header>
        <div className="container">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={`${route.path} - ${index}`}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
