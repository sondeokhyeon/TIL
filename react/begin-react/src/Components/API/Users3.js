import React, { useState } from "react";
import axios from "axios";
import useAsync from "./reducer";
import User from "./User";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"
  );
  return response.data;
}

const Users = () => {
  const [state, reFetch] = useAsync(getUsers, [], true);
  const [userId, setUserId] = useState(null);

  const { loading, data: users, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error발생</div>;
  if (!users) return <button onClick={reFetch}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => {
              setUserId(user.id);
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={reFetch}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
