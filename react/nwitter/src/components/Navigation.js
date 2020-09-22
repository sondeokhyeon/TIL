import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/profile">{userObj.displayName} Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
