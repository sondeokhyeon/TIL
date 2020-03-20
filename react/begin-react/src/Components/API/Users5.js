import React, { useState, useEffect } from "react";
import User from "./User2";
import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext2";

const Users = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  };

  useEffect(() => {
    getUsers(dispatch);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error발생</div>;
  if (!users) return null;

  const prevUser = () => {
    setUserId(userId - 1);
  };

  const nextUser = () => {
    setUserId(userId + 1);
  };

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
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} prevUser={prevUser} nextUser={nextUser} />}
    </>
  );
};

export default Users;
