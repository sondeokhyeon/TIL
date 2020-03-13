import React, { useReducer } from "react";
// counter

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      throw new Error("unhandled action");
  }
}

const Counter = () => {
  const style = {
    border: "1px solid black",
    padding: "10px"
  };

  const [number, dispatch] = useReducer(reducer, 0);

  // const [num, setNumber] = useState(0);
  // const plus = () => {
  //   setNumber(preNum => preNum + 1);
  // };
  // const minus = () => {
  //   setNumber(preNum => preNum - 1);
  // };
  const plus = () => {
    dispatch({
      type: "plus"
    });
  };
  const minus = () => {
    dispatch({
      type: "minus"
    });
  };
  return (
    <div style={style}>
      <span>카운터</span>
      <h1>{number}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  );
};

export default Counter;
