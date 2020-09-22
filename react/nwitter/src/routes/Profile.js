import React, { useState } from "react";
import { authService, dbService } from "../mybase";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogoutClick = () => {
    authService.signOut();
    history.push("/");
  };

  // const getMyNweets = async () => {
  //   const nweets = await dbService
  //     .collection("nweets")
  //     .where("creatorId", "==", userObj.uid)
  //     .orderBy("createdAt")
  //     .get();
  //   console.log(nweets.docs.map((doc) => doc.data()));
  // };

  // useEffect(() => {
  //   getMyNweets();
  // }, []);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewDisplayName(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display Name"
          value={newDisplayName}
          onChange={onChange}
        />
        <input type="submit" value="update profile" />
      </form>
      <button onClick={onLogoutClick}>Log out</button>
    </>
  );
};

export default Profile;
