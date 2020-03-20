import React from "react";
import { Link, Route } from "react-router-dom";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/router/profile/sondeokhyeon">sondeokhyeon</Link>
        </li>
        <li>
          <Link to="/router/profile/honggildong">홍길동</Link>
        </li>
      </ul>

      <Route
        path="/router/profile/"
        exact
        render={() => <div>선택하세요</div>}
      />
    </div>
  );
};

export default Profiles;
