import React, { useState, useRef, useEffect } from "react";

const Item = ({ todo, del, toggle }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.active ? "none" : "line-through"
        }}
        onClick={() => toggle(todo.id)}
      >
        {todo.value}
      </span>
      <button onClick={() => del(todo.id)}>삭제</button>
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

  const id = useRef(0);

  const del = num => {
    const newItem = jobs.filter(job => {
      return job.id !== num;
    });
    setJobs(newItem);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const toggle = id => {
    setJobs(
      jobs.map(job => (job.id === id ? { ...job, active: !job.active } : job))
    );
  };

  const TodoAdd = e => {
    setJobs([...jobs, { id: (id.current += 1), value, active: true }]);
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
        <Item key={job.id} todo={job} del={del} toggle={toggle} />
      ))}
    </div>
  );
};

export default Todo;
