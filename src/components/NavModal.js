import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import CrossIcon from "../../assets/icons/times-solid.svg";

const NavModalContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  z-index: 5;
  color: var(--color-base);
  opacity: 0.95;
  ${({ visible }) => !visible && `display: none`}
`;

const NavMenuCloseBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border: none;
  background-color: var(--color-primary);
  color: var(--color-base);

  & svg {
    width: 0.8em;
    margin-right: 0.25em;
  }
`;

const NavLink = styled((props) => <Link {...props} />)`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 2em;
  text-decoration: none;
  padding: 0.25em 1em;
  color: var(--color-base);
`;

export function NavModal({ visible, hideModal }) {
  const activeLinkStyle = {
    boxShadow: `inset 5px 0 var(--color-accent), inset -5px 0 var(--color-accent)`,
  };

  return (
    <NavModalContainer visible={visible}>
      <NavMenuCloseBtn onClick={hideModal}>
        <CrossIcon />
        CLOSE
      </NavMenuCloseBtn>
      <NavLink to="/" activeStyle={activeLinkStyle} onClick={hideModal}>
        Home
      </NavLink>

      <NavLink to="/projects" activeStyle={activeLinkStyle} onClick={hideModal}>
        Projects
      </NavLink>
      <NavLink to="/contact" activeStyle={activeLinkStyle} onClick={hideModal}>
        Contact
      </NavLink>
    </NavModalContainer>
  );
}
