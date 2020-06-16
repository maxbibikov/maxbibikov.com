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
import { ThemeContext } from "./Theme";

const isBrowser = typeof window !== `undefined`;

const HeaderContainer = styled.header`
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.bg_color};
  color: ${({ theme }) => theme.text_color};
  height: 4em;
  transition: background-color 0.5s, color 0.5s ease, box-shadow 0.3s linear,
    top 0.3s ease;
  overflow: hidden;
  ${({ topBarShadow }) =>
    topBarShadow && `box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);`}
  ${({ hideTopBar }) =>
    hideTopBar && `top: -4em;`}
  @media only screen and (min-width: 900px) {
    justify-content: center;
  }
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
  transition: transform 0.3s linear, background-color 0.5s, color 0.5s ease;
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.text_color};
  }
  &:visited {
    color: ${({ theme }) => theme.text_color};
  }

  @media only screen and (min-width: 900px) {
    margin-right: auto;
  }
`;

const ThemeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 100%;
  border: none;
  padding: 0;
  background-color: ${({ theme }) => theme.bg_color};
  color: ${({ theme }) => theme.text_color};
  transition: background-color 0.5s, color 0.5s ease;
  cursor: pointer;
  outline: none;
  & svg {
    transition: all 0.3s ease;
    width: 1.5em;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.text_accent_bright};
    }
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

const NavContainer = styled.nav`
  display: none;
  height: 100%;

  @media only screen and (min-width: 900px) {
    display: flex;
    align-items: center;
  }
`;

const NavLink = styled(props => <Link {...props} />)`
  font-family: "Blinker-Bold";
  text-align: center;
  text-decoration: none;
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.text_color};
`;

function Header() {
  const [showNavModal, setShowNavModal] = React.useState(false);
  const [hideTopBar, setHideTopBar] = React.useState(false);
  const [topBarShadow, setTopBarShadow] = React.useState(false);
  const { themeName, toggleTheme } = React.useContext(ThemeContext);
  const scrollYValue = React.useRef(0);

  React.useLayoutEffect(() => {
    // use this variable to clear timeout
    let throttleTimeout;
    function handleScroll() {
      let scrollYPosition = window.scrollY;

      // use timeout throttle because scroll updates too often
      throttleTimeout = setTimeout(() => {
        // hide shadow if no scroll or top off the page
        if (window.pageYOffset === 0) {
          setTopBarShadow(() => false);
        }
        // show top bar shadow on scroll
        if (window.pageYOffset > 5) {
          setTopBarShadow(() => true);
        }
        // hide top bar on scrolling further down the page
        if (scrollYValue.current < scrollYPosition && scrollYPosition > 150) {
          setHideTopBar(() => true);
        } else {
          // make top bar visible if scrolling back to the top
          setHideTopBar(() => false);
        }
        scrollYValue.current = scrollYPosition;
      }, 300);
    }
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(throttleTimeout);
    };
  }, [topBarShadow, hideTopBar]);

  const onMenuBtnClick = () => {
    setShowNavModal(true);
  };
  const hideModal = () => setShowNavModal(false);

  return (
    <HeaderContainer hideTopBar={hideTopBar} topBarShadow={topBarShadow}>
      {/* Mobile navigation */}
      <NavMenuBtn onClick={onMenuBtnClick} hidden={showNavModal}>
        <BarsIcon />
      </NavMenuBtn>
      <NavModal visible={showNavModal} hideModal={hideModal} />
      <Logo to="/">maxbibikov.com</Logo>
      {/* Big screen navigation */}
      <NavContainer>
        <NavLink to="/" activeStyle={{ textDecoration: "underline" }}>
          Home
        </NavLink>

        <NavLink to="/projects" activeStyle={{ textDecoration: "underline" }}>
          Projects
        </NavLink>
        <NavLink to="/contact" activeStyle={{ textDecoration: "underline" }}>
          Contact
        </NavLink>
      </NavContainer>
      <ThemeBtn type="button" onClick={() => toggleTheme()}>
        {themeName === "light" ? <MoonIcon /> : <SunIcon />}
      </ThemeBtn>
    </HeaderContainer>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  // toggleTheme: PropTypes.func.isRequired,
  // theme: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
