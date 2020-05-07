import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import CrossIcon from "../../assets/icons/times-solid.svg";

const NavModalContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bg_color};
  z-index: 5;
  color: ${({ theme }) => theme.text_color};
  opacity: 95%;
  ${({ visible }) => !visible && `display: none`}
`;

const NavMenuCloseBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  border: none;
  background-color: ${({ theme }) => theme.bg_color};
  color: ${({ theme }) => theme.text_color};
  transition: background-color 0.5s, color 0.5s ease;
  & svg {
    width: 1.5em;
  }
`;

const NavLink = styled(props => <Link {...props} />)`
  font-family: "Blinker-Bold";
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 2em;
  text-decoration: none;
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.text_color};
`;

export function NavModal({ visible, hideModal }) {
  const onMenuCloseBtnClick = () => {
    hideModal();
  };

  return (
    <NavModalContainer visible={visible}>
      <NavMenuCloseBtn onClick={onMenuCloseBtnClick}>
        <CrossIcon />
      </NavMenuCloseBtn>
      <NavLink
        to="/"
        activeStyle={{ textDecoration: "underline" }}
        onClick={() => hideModal()}
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        activeStyle={{ textDecoration: "underline" }}
        onClick={() => hideModal()}
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        activeStyle={{ textDecoration: "underline" }}
        onClick={() => hideModal()}
      >
        Contact
      </NavLink>
    </NavModalContainer>
  );
}
