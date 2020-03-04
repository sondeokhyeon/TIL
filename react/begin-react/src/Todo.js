import React, { useState, useEffect } from "react";

const Item = ({ todo, del }) => {
  return (
    <div>
      <span>{todo.value}</span>
      <button onClick={del} itemID={todo.id}>
        삭제
      </button>
    </div>
  );
};

const Todo = () => {
  const style = {
    border: "1px solid black",
    padding: 20
  };
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState("");
  const [id, setId] = useState(1);

  const del = e => {
    const newItem = jobs.filter(job => {
      return job.id !== parseInt(e.target.getAttribute("itemid"));
    });
    setJobs(newItem);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const TodoAdd = e => {
    setJobs(old => [...old, { id, value }]);
    setId(prev => prev + 1);
    setValue("");
  };

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  return (
    <div style={style}>
      <div>My Todo</div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={e => {
          e.charCode === 13 && TodoAdd();
        }}
      ></input>
      <button onClick={TodoAdd}>등록</button>
      {jobs.map(job => (
        <Item key={job.id} todo={job} del={del} />
      ))}
    </div>
  );
};

export default Todo;
