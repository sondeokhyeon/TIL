import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({
  children,
  size,
  color,
  outline,
  fullwidth,
  className,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "Button",
        size,
        color,
        {
          outline,
          fullwidth
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue"
};

export default Button;
