import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Session from "./Session";
import FrontLogin from "./FrontLogin";

class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/session/About">About</Link>
            <Link to="/Session">Session</Link>
            <Link to="/FrontLogin">Log In</Link>
          </nav>
          <Switch>
            <Route path="/session/About" exact component={About} />
            <Route path="/Session" component={Session} />
            <Route path="/FrontLogin" component={FrontLogin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
