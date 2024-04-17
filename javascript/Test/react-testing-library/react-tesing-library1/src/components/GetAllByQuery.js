import { useEffect, useState } from "react";

export const UserList = ({ users }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsTitleVisible(true);
    }, 1500);
  }, []);
  return (
    <div>
      {isTitleVisible && <h1>Users</h1>}
      <ul>
        {users.map((user, index) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
