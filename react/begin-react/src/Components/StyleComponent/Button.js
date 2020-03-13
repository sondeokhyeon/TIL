import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selectedColor = theme.palette[color];
    return css`
      background: ${color};
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;

  height: 2.25rem;
  font-size: 1rem;
  ${colorStyles}

  & + & {
    margin-left: 1rem;
  }
`;

const Button = ({ children, color, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "blue"
};

export default Button;
