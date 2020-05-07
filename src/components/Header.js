import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// Assets
import SunIcon from "../../assets/icons/sun-solid.svg";
import MoonIcon from "../../assets/icons/moon-solid.svg";
import BarsIcon from "../../assets/icons/bars-solid.svg";

// Components
import { NavModal } from "./NavModal";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bg_color};
  color: ${({ theme }) => theme.text_color};
  height: 4em;
  transition: background-color 0.5s, color 0.5s ease;
`;

const Logo = styled(props => <Link {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1em;
  text-decoration: none;
  color: ${({ theme }) => theme.text_color};
  font-size: 1.2rem;
  transition: transform 0.3s linear;
  transition: background-color 0.5s, color 0.5s ease;
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.text_color};
  }
  &:visited {
    color: ${({ theme }) => theme.text_color};
  }
`;

const ThemeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  border: none;
  background-color: ${({ theme }) => theme.bg_color};
  color: ${({ theme }) => theme.text_color};
  transition: background-color 0.5s, color 0.5s ease;
  cursor: pointer;
  & svg {
    width: 1.5em;
  }
`;

const NavMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  border: none;
  background-color: ${({ theme }) => theme.bg_color};
  color: ${({ theme }) => theme.text_color};
  transition: background-color 0.5s, color 0.5s ease;
  ${({ hidden }) => hidden && `visibility: hidden;`}
  & svg {
    width: 1.5em;
  }

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

function Header({ toggleTheme, theme }) {
  const [showNavModal, setShowNavModal] = React.useState(false);
  const onMenuBtnClick = () => {
    setShowNavModal(true);
  };
  const hideModal = () => setShowNavModal(false);

  return (
    <HeaderContainer>
      <NavMenuBtn onClick={onMenuBtnClick} hidden={showNavModal}>
        <BarsIcon />
      </NavMenuBtn>
      <NavModal visible={showNavModal} hideModal={hideModal} />
      <Logo to="/">maxbibikov.com</Logo>
      <ThemeBtn type="button" onClick={() => toggleTheme()}>
        {theme === "default" ? <SunIcon /> : <MoonIcon />}
      </ThemeBtn>
    </HeaderContainer>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  toggleTheme: PropTypes.func.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
