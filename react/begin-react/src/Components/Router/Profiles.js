import React from "react";
import { Route, NavLink } from "react-router-dom";
import Profile from "./Profile";
import UseRouterSample from "./UseRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/router/profile/sondeokhyeon"
            activeStyle={{ background: "black", color: "white" }}
          >
            sondeokhyeon
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/router/profile/honggildong"
            activeStyle={{ background: "black", color: "white" }}
          >
            홍길동
          </NavLink>
        </li>
      </ul>

      <Route
        path="/router/profile/"
        exact
        render={() => <div>선택하세요</div>}
      />

      <Route path="/router/profile/:username" component={Profile} />
      <UseRouterSample />
    </div>
  );
};

export default Profiles;
