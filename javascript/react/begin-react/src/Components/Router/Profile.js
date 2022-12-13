import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  sondeokhyeon: {
    name: "손덕현",
    description: "I'm Minwoo father"
  },
  honggildong: {
    name: "홍길동",
    description: "홍길동전 주인공"
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>Not found!</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
