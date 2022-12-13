import { useReducer, useEffect, useCallback } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`unhandled actions type ${action.type}`);
  }
};

function useAsync(callback, deps = [], skip) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await callback();
      dispatch({ type: "SUCCESS", data: response });
    } catch (err) {
      dispatch({ type: "ERROR", error: err });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) {
      return;
    }
    fetchData();
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;
