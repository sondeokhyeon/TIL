import React from "react";

// UserListRender
const User = React.memo(({ user, onRemove, onToggle }) => {
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
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>{email}</span>&nbsp;
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

const UserList = ({ users, onRemove, onToggle }) => {
  const style = {
    marginBottom: "20px"
  };

  return (
    <div style={style}>
      <span>Render</span>
      <br></br>
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
export default React.memo(UserList);
