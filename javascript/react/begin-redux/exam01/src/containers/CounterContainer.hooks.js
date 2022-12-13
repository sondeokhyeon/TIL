import React from "react";
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const CounterContainer = () => {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
