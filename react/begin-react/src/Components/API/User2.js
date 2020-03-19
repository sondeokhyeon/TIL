import React, { useEffect } from "react";
import { useUsersState, useUsersDispatch, getUser } from "./UsersContext";

const User = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);
  const { data: user, error, loading } = state.user;

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
