import React, { useEffect, useReducer } from "react";
import useFetch from "./useFetch";
import todoReducer from "./reducers";

export const TodoContext = React.createContext();

const TodoStore = props => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = initData => {
    console.log("initData", initData);
    dispatch({ type: "SET_INIT_DATA", payload: initData });
  };

  const loading = useFetch(setInitData, "http://localhost:1337/tests");

  useEffect(() => {
    console.log("뉴 랜더", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, loading, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoStore;
