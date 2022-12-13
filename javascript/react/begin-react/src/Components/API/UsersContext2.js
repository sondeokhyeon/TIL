import React, { createContext, useReducer, useContext } from "react";
import * as api from "./Api";
import createAsyncDispatcher, {
  initalAyncState,
  createAsyncHandler
} from "./AsyncUtils";

const intialState = {
  users: initalAyncState,
  user: initalAyncState
};

const usersHandler = createAsyncHandler("GET_USERS", "users");
const userHandler = createAsyncHandler("GET_USER", "user");

function usersReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
    case "GET_USERS_SUCCESS":
    case "GET_USERS_ERROR":
      return usersHandler(state, action);
    case "GET_USER":
    case "GET_USER_SUCCESS":
    case "GET_USER_ERROR":
      return userHandler(state, action);
    default:
      throw new Error(`unHandled Actions Type is ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider2({ children }) {
  const [state, dispatch] = useReducer(usersReducer, intialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error("cannot find userProvider");
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error("cannot find userProvider");
  }
  return dispatch;
}

export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);
