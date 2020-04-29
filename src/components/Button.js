import React from "react";
import styled from "styled-components";

const PrimaryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.text_contrast};
  background-color: ${({ theme }) => theme.bg_contrast};
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Blinker-Bold";
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
    color: ${({ theme }) => theme.bg_accent};
  }
`;

const SecondaryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.bg_color};
  border-radius: 6px;
  text-transform: uppercase;
  text-decoration: underline;
  font-family: "Blinker-Bold";
  cursor: pointer;
  background: none;
  color: ${({ theme }) => theme.text_color};
  transition: border 0.3s linear;
  padding: 0.5em 1em;
  &:hover {
    border: 1px solid ${({ theme }) => theme.bg_contrast};
  }
  &:active {
    color: ${({ theme }) => theme.text_accent};
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
