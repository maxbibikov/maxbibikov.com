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
  text_color: "#212121",
  text_bright: "#484848",
  text_contrast: "#fafafa",
  text_accent: "#ff3d00",
  text_accent_bright: "#ff6e40",
  bg_color: "#fafafa",
  bg_light: "#ffffff",
  bg_dark: "#c7c7c7",
  bg_contrast: "#212121",
  bg_accent: "#ff3d00",
};
const darkTheme = {
  text_color: "#fafafa",
  text_contrast: "#212121",
  text_accent: "#ff3d00",
  text_accent_bright: "#ff6e40",
  bg_color: "#212121",
  bg_light: "#484848",
  bg_dark: "#000000",
  bg_contrast: "#fafafa",
  bg_accent: "#ff3d00",
};

const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${({ theme }) => theme.text_color};
    background: ${({ theme }) => theme.bg_color};
    transition: background-color 0.5s, color 0.5s ease;
  }
  a {
    color: ${({ theme }) => theme.text_accent};
    transition: color 0.3s ease;
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

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 8em); /* 8em = 4em header + 4 em footer heights */
  height: 100%;
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
