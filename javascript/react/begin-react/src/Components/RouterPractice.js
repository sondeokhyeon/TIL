import React from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Profiles from "./Router/Profiles";
import History from "./Router/History";

const RouterPractice = () => {
  const baseUrl = "/router";
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={`${baseUrl}`}>Home</Link>
        </li>
        <li>
          <Link to={`${baseUrl}/about`}>About</Link>
        </li>
        <li>
          <Link to={`${baseUrl}/profile`}>profile</Link>
        </li>
        <li>
          <Link to={`${baseUrl}/history`}>history</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${baseUrl}`} component={Home} exact />
        <Route path={`${baseUrl}/about`} component={About} />
        <Route path={`${baseUrl}/history`} component={History} />
        <Route path={`${baseUrl}/profile`} component={Profiles} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterPractice;
