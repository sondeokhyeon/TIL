import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Begin from "./components/Begin.js";
import Nav from "./components/Nav";
import SASS from "./components/SassStyle";
import SC from "./components/StyleComponent";
import API from "./components/API.js";
import RouterPractice from "./components/RouterPractice";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/sass-style" component={SASS} />
          <Route path="/style-component" component={SC} />
          <Route path="/api" component={API} />
          <Route path="/router" exact component={RouterPractice} />
          <Route path="/" exact component={Begin} />
          <Route
            render={({ location }) => (
              <div>
                <h2>Page Not found</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
