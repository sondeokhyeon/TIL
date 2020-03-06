import { useReducer } from "react";

const reducer = (state, action) => {
  const { name, value } = action;
  switch (action.type) {
    case "change":
      return { ...state, [name]: value };
    case "reset":
      return { ...state, action };
    default:
      return;
  }
};

const useInputs = initalForm => {
  const [state, dispatch] = useReducer(reducer, initalForm);
  const onChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: "change",
      name,
      value
    });
    return state;
  };
  const reset = () => {
    dispatch({ type: "reset", initalForm });
    return state;
  };
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
