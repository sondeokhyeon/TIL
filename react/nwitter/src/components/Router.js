import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./navigation";
import Profile from "../routes/Profile";

export default ({ isLoggedin, useObj }) => {
  return (
    <Router>
      {isLoggedin && <Navigation />}
      <Switch>
        {isLoggedin ? (
          <>
            <Route exact path="/">
              <Home useObj={useObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};
