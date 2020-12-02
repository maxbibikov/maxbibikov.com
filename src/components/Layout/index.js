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
import { ThemeContext } from "../Theme";
import Header from "../Header";
import { Footer } from "../Footer";
import "./layout.css";

const lightTheme = {
  text: "#212121",
  accent: "#5e35b1",
  primary: "#fafafa",
  primary_light: "#ffffff",
  primary_dark: "#cccab5",
  secondary: "#212121",
  secondary_dark: "#000000",
  secondary_light: "#484848",
};
const darkTheme = {
  text: "#fafafa",
  accent: "#81c784",
  primary: "#212121",
  primary_light: "#484848",
  primary_dark: "#000000",
  secondary: "#fafafa",
  secondary_dark: "#cccab5",
  secondary_light: "#ffffff",
};

const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.primary};
  }
  a {
    color: ${({ theme }) => theme.accent};
    transition: opacity 0.3s ease;
  }
  a:hover {
    opacity: 0.8;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
  }
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 8em); /* 8em = 4em header + 4 em footer heights */
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }) => {
  const { themeName } = React.useContext(ThemeContext);
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
    <ThemeProvider theme={themeName === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
