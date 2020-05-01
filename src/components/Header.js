import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// Assets
import SunIcon from "../../assets/images/sun-solid.svg";
import MoonIcon from "../../assets/images/moon-solid.svg";
import BarsIcon from "../../assets/images/bars-solid.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bg_contrast};
  color: ${({ theme }) => theme.text_contrast};
  height: 4em;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

const Logo = styled(props => <Link {...props} />)`
  box-sizing: border-box;
  font-family: "Blinker-Bold";
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text_contrast};
  font-size: 2rem;
  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.text_contrast};
  }
  &:visited {
    color: ${({ theme }) => theme.text_contrast};
  }
`;

const ThemeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  border: none;
  background-color: ${({ theme }) => theme.bg_contrast};
  color: ${({ theme }) => theme.text_contrast};
  transition: color 1s;
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
  background-color: ${({ theme }) => theme.bg_contrast};
  color: ${({ theme }) => theme.text_contrast};
  & svg {
    width: 1.5em;
  }
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <div>
        <Logo to="/">MB</Logo>
      </div>
      <ThemeBtn type="button" onClick={() => toggleTheme()}>
        {theme === "default" ? <SunIcon /> : <MoonIcon />}
      </ThemeBtn>
      <NavMenuBtn>
        <BarsIcon />
      </NavMenuBtn>
    </HeaderContainer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  toggleTheme: PropTypes.func.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
