import React from "react";
import "./App.css";
import { Wrapper } from "./Wrapper";
import { Hello, Counter, InputSample, UserList } from "./Components";
import Todo from "./Todo";
const style = {
  backgroundColor: "black",
  color: "white"
};

function App() {
  const hello = "hello";
  const world = "world!!";

  return (
    <Wrapper>
      {/* 주석주석 */}
      <Hello name={hello} color="white" isSpecial />
      <h1 style={style}>{world}</h1>
      <Hello color="skyblue" />
      <Counter />
      <InputSample />
      <UserList />
      <Todo />
    </Wrapper>
  );
}

export default App;
