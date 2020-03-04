import React, { useState, useRef } from "react";

// hello
export const Hello = ({ name, color, isSpecial }) => {
  return (
    <h1 style={{ color }} className="hello">
      {isSpecial ? <b>*</b> : <b>n</b>}
      {name}
    </h1>
  );
};

Hello.defaultProps = {
  name: "noName",
  isSpecial: false
};

// counter
export const Counter = () => {
  const style = {
    border: "1px solid black",
    padding: "10px"
  };
  const [num, setNumber] = useState(0);
  const plus = () => {
    setNumber(preNum => preNum + 1);
  };
  const minus = () => {
    setNumber(preNum => preNum - 1);
  };
  return (
    <div style={style}>
      <span>카운터</span>
      <h1>{num}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  );
};

// inputSample
export const InputSample = () => {
  const style = {
    border: "1px solid black",
    padding: "10px",
    margin: "20px 0px"
  };

  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    nameInput.current.focus();
  };

  return (
    <div style={style}>
      <span>Input</span>
      <br />
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름"
        ref={nameInput}
      />
      <input
        name="nickname"
        onChange={onChange}
        value={nickname}
        placeholder="닉네임"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

// UserListRender
const User = ({ user }) => {
  return (
    <div>
      <b>{user.name}</b> <span>{user.email}</span>
    </div>
  );
};
export const UserList = () => {
  const style = {
    border: "1px solid black",
    padding: 10,
    margin: "20px 0px"
  };
  const users = [
    {
      id: 1,
      username: "test1",
      email: "test1@test.com"
    },
    {
      id: 2,
      username: "test2",
      email: "test2@test.com"
    },
    {
      id: 3,
      username: "test3",
      email: "test3@test.com"
    }
  ];
  return (
    <div style={style}>
      <span>Render</span>
      <br></br>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
