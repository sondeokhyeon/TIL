import React, { useContext } from "react";
import { UserDispatch } from "./User";

// UserListRender
const User = React.memo(({ user }) => {
  const { dispatch } = useContext(UserDispatch);
  const { username, email, id, active } = user;
  //   useEffect(() => {
  //     console.log("값이 설정됨", user);
  //     return () => {
  //       console.log("값이 바뀌기 전임", user);
  //     };
  //   }, [user]);
  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer"
        }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id })}
      >
        {username}
      </b>
      &nbsp;
      <span>{email}</span>&nbsp;
      <button onClick={() => dispatch({ type: "REMOVE_USER", id })}>
        삭제
      </button>
    </div>
  );
});

const UserList = () => {
  const { users } = useContext(UserDispatch);
  const style = {
    marginBottom: "20px"
  };

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
export default React.memo(UserList);
