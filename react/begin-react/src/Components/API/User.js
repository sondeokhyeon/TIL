import React from "react";
import axios from "axios";
import useAsync from "./reducer";

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

const User = ({ id }) => {
  const [state] = useAsync(() => getUser(id), [id]);
  const { loading, data: user, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error발생</div>;
  if (!user) return null;

  return (
    <div>
      <h1>{user.username}</h1>
      <p>
        <b>email : {user.email}</b>
      </p>
    </div>
  );
};

export default User;
