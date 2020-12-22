import * as React from "react";
import styled, { ThemeContext } from "styled-components";
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
  background: ${({ theme }) => theme.primary};
  z-index: 5;
  color: ${({ theme }) => theme.text};
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
  padding: 1em;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
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
  color: ${({ theme }) => theme.text};
`;

export function NavModal({ visible, hideModal }) {
  const theme = React.useContext(ThemeContext);
  const activeLinkStyle = {
    boxShadow: `inset 5px 0 ${theme.accent}, inset -5px 0 ${theme.accent}`,
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
