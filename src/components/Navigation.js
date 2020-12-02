import * as React from "react";
import { Link } from "gatsby";
import styled, { ThemeContext } from "styled-components";

// Components
import { NavModal } from "./NavModal";
import BarsIcon from "../../assets/icons/bars-solid.svg";

const NavContainer = styled.nav`
  display: none;
  height: 100%;

  @media only screen and (min-width: 900px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const NavMenuBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5em;
  padding: 0;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  ${({ hidden }) => hidden && `visibility: hidden;`}
  & svg {
    width: 1.5em;
  }
  font-size: 0.9rem;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

const NavLink = styled((props) => <Link {...props} />)`
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  padding: 0.5em 0.5em;
  margin: 0 0.5em;
  color: ${({ theme }) => theme.text};

  &:hover {
    opacity: 1;
    box-shadow: inset 0 -3px ${({ theme }) => theme.accent};
  }
`;

export function Navigation() {
  const [showNavModal, setShowNavModal] = React.useState(false);
  const theme = React.useContext(ThemeContext);
  const activeLinkStyle = {
    boxShadow: `inset 0 -3px ${theme.accent}`,
  };

  const onMenuBtnClick = () => {
    setShowNavModal(true);
  };
  const hideModal = () => setShowNavModal(false);

  return (
    <>
      {/* Mobile navigation */}
      <NavMenuBtn
        type="button"
        aria-label="menu"
        onClick={onMenuBtnClick}
        hidden={showNavModal}
      >
        <BarsIcon />
        Menu
      </NavMenuBtn>
      <NavModal visible={showNavModal} hideModal={hideModal} />

      {/* Big screen navigation */}
      <NavContainer>
        <NavLink to="/" activeStyle={activeLinkStyle}>
          Home
        </NavLink>

        <NavLink to="/projects" activeStyle={activeLinkStyle}>
          Projects
        </NavLink>
        <NavLink to="/contact" activeStyle={activeLinkStyle}>
          Contact
        </NavLink>
      </NavContainer>
    </>
  );
}
