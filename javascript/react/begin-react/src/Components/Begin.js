import React from "react";
import Hello from "./Begin/Hello";
import Counter from "./Begin/Counter";
import InputSample from "./Begin/InputSample";
import Todo from "./Begin/Todo";
import User from "./Begin/User";
import Todo2 from "./Begin/Todo2";
import ContextSample from "./Begin/ContextSample";
import { Wrapper } from "./Begin/Wrapper";

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
