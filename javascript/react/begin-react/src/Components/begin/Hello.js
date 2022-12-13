import React from "react";

// hello
const Hello = ({ name, color, isSpecial }) => {
  return (
    <h1 style={{ color }} className="hello">
      {isSpecial ? <b>*</b> : <b>n</b>}
      {name}
    </h1>
  );
};

Hello.defaultProps = {
  name: "noName",
  isSpecial: false
};

export default Hello;
