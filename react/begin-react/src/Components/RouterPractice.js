import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Profiles from "./Router/Profiles";
import Profile from "./Router/Profile";

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
      </ul>
      <Route path={`${baseUrl}`} component={Home} exact />
      <Route path={`${baseUrl}/about`} component={About} />
      <Route path={`${baseUrl}/profile`} exact component={Profiles} />
      <Route path="/router/profile/:username" component={Profile} />
    </BrowserRouter>
  );
};

export default RouterPractice;
