import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selectedColor = theme.palette[color];
    return css`
      background: ${selectedColor};
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selectedColor};
          background: none;
          border: 1px solid ${selectedColor};
          &:hover {
            background: ${selectedColor};
            color: white;
          }
        `};
    `;
  }}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullwidth &&
    css`{
    width:100%;
    justify-content:center;
    & + & {
      margin-top:1rem;
      margin-left: 0;
    }
  `}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem"
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem"
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem"
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
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
  & + & {
    margin-left: 1rem;
  }
  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
`;

const Button = ({ children, color, outline, fullwidth, ...rest }) => {
  return (
    <StyledButton
      color={color}
      outline={outline}
      fullwidth={fullwidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "blue",
  size: "medium"
};

export default Button;
