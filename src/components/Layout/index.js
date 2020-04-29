/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Components
import Header from "../Header";
import { Footer } from "../Footer";
import "./layout.css";

const defaultTheme = {
  text_color: "#212121",
  text_bright: "#484848",
  text_contrast: "#fafafa",
  text_accent: "#ff3d00",
  text_accent_bright: "#ff6e40",
  bg_color: "#fafafa",
  bg_contrast: "#212121",
  bg_accent: "#ff3d00",
};
const darkTheme = {
  text_color: "#fafafa",
  text_contrast: "#212121",
  text_accent: "#ff3d00",
  text_accent_bright: "#ff6e40",
  bg_color: "#212121",
  bg_contrast: "#fafafa",
  bg_accent: "#ff3d00",
};

const GlobalStyle = createGlobalStyle`
  html,body {
    color: ${({ theme }) => theme.text_color};
    background: ${({ theme }) => theme.bg_color};
    transition: background-color 0.5s, color 0.5s ease;
  }
  a {
    color: ${({ theme }) => theme.text_accent}
  }
  a:visited {
    color: "#ff9100";
  }
  a:hover {
    color: ${({ theme }) => theme.text_accent_bright}
  }
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
  }
`;

const windowGlobal = typeof window !== "undefined";
let savedTheme = "default";
if (windowGlobal) {
  savedTheme = localStorage.getItem("theme") || "default";
}

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 8em); /* 8em = 4em header + 4 em footer heights */
  height: 100%;
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState(savedTheme);
  const toggleTheme = () => {
    if (theme === "default") {
      if (windowGlobal) {
        localStorage.setItem("theme", "dark");
      }
      setTheme("dark");
    } else {
      if (windowGlobal) {
        localStorage.setItem("theme", "default");
      }
      setTheme("default");
    }
  };
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata.title}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
