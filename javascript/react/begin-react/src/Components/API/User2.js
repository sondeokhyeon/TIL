import React, { useEffect, memo } from "react";
import { useUsersState, useUsersDispatch, getUser } from "./UsersContext2";

const User = memo(({ id, prevUser, nextUser }) => {
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
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
      <p>
        <b>email : {user.email}</b>
      </p>
      <button onClick={() => prevUser()}>이전</button>
      <button onClick={() => nextUser()}>다음</button>
    </div>
  );
});

export default User;
