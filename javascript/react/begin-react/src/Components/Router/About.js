import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const detail = query.detail === "true";

  return <div>about {detail && "WOW"}</div>;
};

export default About;
