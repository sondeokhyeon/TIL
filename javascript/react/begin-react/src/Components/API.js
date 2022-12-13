import React from "react";
// import Users from "./API/Users";
// import Users2 from "./API/Users2";
import Users3 from "./API/Users3";
import Users4 from "./API/Users4";
import Users5 from "./API/Users5";
import { UsersProvider2 } from "./API/UsersContext2";

const API = () => {
  return (
    <UsersProvider2>
      {/* <Users />
      <Users2 />*/}
      <h1>Users5</h1>
      <Users5 />
      <br />
      <br />
      <h1>Users4</h1>
      <Users4 />
      <br />
      <br />
      <h1>Users3</h1>
      <Users3 />
    </UsersProvider2>
  );
};

export default API;
