import React from "react";
import styled from "styled-components";

const PrimaryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border: none;
  border-radius: 6px;
  color: var(--color-primary);
  background-color: var(--color-accent);
  box-shadow: 0 4px 6px lch(0% 0 0deg / 2%);
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    color: var(--color-secondary);
  }
`;

const SecondaryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-primary);
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  background: none;
  color: var(--color-accent);
  transition: border 0.3s linear;
  padding: 0.5em 1em;

  &:hover {
    border: 1px solid var(--color-accent);
  }

  &:active {
    color: var(--color-secondary);
  }
`;

export const Button = ({ type, styleType, children, ...props }) => {
  if (styleType === "secondary") {
    return (
      <SecondaryBtn type={type} {...props}>
        {children}
      </SecondaryBtn>
    );
  }

  return (
    <PrimaryBtn type={type} {...props}>
      {children}
    </PrimaryBtn>
  );
};

Button.defaultProps = {
  type: "button",
  styleType: "primary",
};
