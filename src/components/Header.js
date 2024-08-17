import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

// Assets
import SunIcon from "../../assets/icons/sun-solid.svg";
import MoonIcon from "../../assets/icons/moon-solid.svg";

// Components
import { ThemeContext } from "./Theme";
import { Navigation } from "./Navigation";

const isBrowser = typeof window !== `undefined`;

const HeaderContainer = styled.header`
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-primary);
  color: var(--color-background);
  height: 4em;
  transition:
    box-shadow 0.3s linear,
    top 0.3s ease;
  overflow: hidden;

  ${({ topBarShadow }) =>
    topBarShadow && `box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);`}
`;

const Logo = styled((props) => <Link {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1em;
  text-decoration: none;
  color: var(--color-base);
  font-size: 1.2rem;

  &:hover {
    color: var(--color-base);
  }

  &:visited {
    color: var(--color-base);
  }

  @media only screen and (width >= 900px) {
    order: -1;
  }
`;

const ThemeBtn = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5em;
  height: 100%;
  border: none;
  padding: 0;
  background-color: var(--color-primary);
  transition: opacity 0.3s ease;
  cursor: pointer;
  outline: none;
  font-size: 0.9rem;
  color: var(--color-base);

  & svg {
    width: 1.5em;
  }

  &:hover {
    opacity: 0.8;
  }
`;

function Header() {
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
        if (window.scrollY === 0) {
          setTopBarShadow(() => false);
        }
        // show top bar shadow on scroll
        if (window.scrollY > 5) {
          setTopBarShadow(() => true);
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
  }, [topBarShadow]);

  return (
    <HeaderContainer topBarShadow={topBarShadow}>
      <Navigation />
      <Logo to="/">maxbibikov.com</Logo>
      <ThemeBtn
        type="button"
        aria-label="toggle theme"
        onClick={() => toggleTheme()}
      >
        {themeName === "light" ? <MoonIcon /> : <SunIcon />}
        {themeName === "light" ? "Dark" : "Light"}
      </ThemeBtn>
    </HeaderContainer>
  );
}

export default Header;
