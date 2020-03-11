import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useReducer
} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, value: action.value };
    case "create":
      return {
        todos: [
          ...state.todos,
          {
            id: action.todo.id,
            value: action.todo.value,
            actvie: action.todo.active
          }
        ]
        //todos: state.todos.concat(action.todo)
      };
    case "remove":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, active: !todo.active } : todo
        )
      };
    default:
      return new Error("err");
  }
};

const Item = React.memo(({ todo, del, toggle }) => {
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
});

const todos = {
  value: "",
  todos: []
};

const Todo2 = () => {
  const style = {
    border: "1px solid black",
    padding: 20
  };
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(reducer, todos);

  const id = useRef(0);

  const TodoAdd = useCallback(
    e => {
      dispatch({
        type: "create",
        todo: {
          id: (id.current += 1),
          value: value,
          active: true
        }
      });
      setValue("");
    },
    [value]
  );

  const onChange = useCallback(e => {
    //dispatch({ type: "change", value: e.target.value });
    setValue(e.target.value);
  }, []);

  const del = useCallback(num => {
    dispatch({ type: "remove", id: num });
  }, []);

  const toggle = id => {
    dispatch({ type: "toggle", id });
  };

  useEffect(() => {
    console.log("jobs : ", state);
  }, [state]);

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
      {/*console.log(state)*/}
      {state.todos.map(job => (
        <Item key={job.id} todo={job} del={del} toggle={toggle} />
      ))}
    </div>
  );
};

export default React.memo(Todo2);
