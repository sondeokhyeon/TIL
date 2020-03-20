import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Nav = Styled.nav``;
const Ul = Styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;
const Li = Styled.li`
  display: inline-block;
  padding: 0px 20px;
`;

export default () => {
  return (
    <Nav>
      <h1>React</h1>
      <Ul>
        <Li>
          <Link to="/">Begin</Link>
        </Li>
        <Li>
          <Link to="/sass-style">sass-begin</Link>
        </Li>
        <Li>
          <Link to="/style-component">style-component</Link>
        </Li>
        <Li>
          <Link to="/api">api</Link>
        </Li>
      </Ul>
    </Nav>
  );
};
