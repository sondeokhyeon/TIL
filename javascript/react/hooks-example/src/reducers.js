export default (todos, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...todos, { id: payload.length, name: payload, status: "on" }];

    case "SET_INIT_DATA":
      console.log(payload);
      return payload;

    case "CHANGE_TODO_STATUS":
      return todos.map(todo => {
        if (todo.id === +payload) {
          todo.status = todo.status === "on" ? "off" : "on";
        }
        return todo;
      });

    default:
      return;
  }
};
