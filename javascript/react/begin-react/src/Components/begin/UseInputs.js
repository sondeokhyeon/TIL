import { useReducer, useCallback } from "react";

const reducer = (state, action) => {
  const { username, value } = action;
  switch (action.type) {
    case "change":
      return { ...state, [username]: value };
    case "reset":
      return { username: "", email: "" };
    default:
      return;
  }
};

const useInputs = initalForm => {
  const [state, dispatch] = useReducer(reducer, initalForm);

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      dispatch({
        type: "change",
        username: name,
        value
      });
      return state;
    },
    [state]
  );

  const reset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  return [state, onChange, reset];
};

export default useInputs;

/*
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initalForm), [initalForm]);
*/
