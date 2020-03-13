import React from "react";
import Hello from "./begin/Hello";
import Counter from "./begin/Counter";
import InputSample from "./begin/InputSample";
import Todo from "./begin/Todo";
import User from "./begin/User";
import Todo2 from "./begin/Todo2";
import ContextSample from "./begin/ContextSample";
import { Wrapper } from "./begin/Wrapper";

export default () => {
  const hello = "hello";
  const world = "world!!";
  const style = {
    backgroundColor: "black",
    color: "white"
  };

  return (
    <Wrapper>
      {/* 주석주석 */}
      <ContextSample />
      <Todo2 />
      <User />
      <Todo />
      <InputSample />
      <Counter />
      <Hello color="skyblue" />
      <h1 style={style}>{world}</h1>
      <Hello name={hello} color="white" isSpecial />
    </Wrapper>
  );
};
