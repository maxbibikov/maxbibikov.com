import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Components
import { NavModal } from "./NavModal";
import BarsIcon from "../../assets/icons/bars-solid.svg";

const NavContainer = styled.nav`
  display: none;
  height: 100%;

  @media only screen and (width >= 900px) {
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
  background-color: var(--color-primary);
  color: var(--color-base);
  font-size: 0.9rem;
  ${({ hidden }) => hidden && `visibility: hidden;`}

  & svg {
    width: 1.5em;
  }

  @media only screen and (width >= 900px) {
    display: none;
  }
`;

const NavLink = styled((props) => <Link {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5em;
  margin: 0 0.5em;
  color: var(--color-base);
  border-bottom: 3px solid transparent;
  transition: border 0.3s linear;

  &:hover {
    opacity: 1;
    border-bottom: 3px solid var(--color-accent);
  }
`;

export function Navigation() {
  const [showNavModal, setShowNavModal] = React.useState(false);
  const activeLinkStyle = {
    borderBottom: `3px solid  var(--color-accent)`,
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
