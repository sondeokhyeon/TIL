import React, { useMemo, useReducer, createContext } from "react";
import produce from "immer";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const style = {
  border: "1px solid black",
  padding: 20,
  margin: "20px 0"
};

const countActiveUsers = users => {
  return users.filter(user => user.active).length;
};

const initalState = {
  users: [
    {
      id: 1,
      username: "test1",
      email: "test1@test.com",
      active: true
    },
    {
      id: 2,
      username: "test2",
      email: "test2@test.com",
      active: false
    },
    {
      id: 3,
      username: "test3",
      email: "test3@test.com",
      active: false
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    // return {
    //   users: state.users.concat(action.user)
    // };
    case "TOGGLE_USER":
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    //   ...state,
    //   users: state.users.map(user =>
    //     user.id === action.id ? { ...user, active: !user.active } : user
    //   )
    // };
    case "REMOVE_USER":
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   users: state.users.filter(user => user.id !== action.id)
    // };
    default:
      throw new Error("Unhanled Action");
  }
};

export const UserDispatch = createContext(null);

const User = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={{ dispatch, users }}>
      <div style={style}>
        <CreateUser />
        <UserList />
        <div>활성 사용자 수 : {count}</div>
      </div>
    </UserDispatch.Provider>
  );
};

export default React.memo(User);
