import React, { useState, useRef } from "react";

// inputSample
const InputSample = () => {
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

export default InputSample;
