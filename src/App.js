import React from "react";
import { Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">contacts</Link>
        </li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={contacts} />
  </header>
);

const Welcome = () => <h1>Welcome to the contact App!</h1>;

const contacts = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to="/contacts/hong">hong</Link>
      </li>
      <li>
        <Link to="/contacts/kim">kim</Link>
      </li>
      <li>
        <Link to="/contacts/park">park</Link>
      </li>
    </ul>
    <Route
      exact
      path={`${match.path}`}
      render={() => <h3>please select a contact</h3>}
    />
    <Route path={`${match.path}/:contactName`} component={Contact} />
  </div>
);

const Contact = ({ match }) => `name is ${match.params.contactName}`;

export default App;
