import React from "react";

export const Wrapper = ({ children }) => {
  const style = {
    border: "2px solid skyblue",
    padding: 16
  };
  return <div style={style}>{children}</div>;
};
