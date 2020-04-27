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
  text_contrast: "#fafafa",
  bg_color: "#fafafa",
  bg_contrast: "#212121",
};
const darkTheme = {
  text_color: "#fafafa",
  text_contrast: "#212121",
  bg_color: "#212121",
  bg_contrast: "#fafafa",
};

const GlobalStyle = createGlobalStyle`
  html,body{
    color: ${({ theme }) => theme.text_color};
    background: ${({ theme }) => theme.bg_color};
    transition: background-color 0.5s, color 0.5s ease;
    font-size: 18px;
  }

  h1 {
    font-family: "Blinker-Bold";
    font-size: 3rem;
  }

`;

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3em;
  height: 80vh;
`;

const Layout = ({ children }) => {
  const savedTheme = localStorage.getItem("theme") || "default";
  const [theme, setTheme] = React.useState(savedTheme);
  const toggleTheme = () => {
    if (theme === "default") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "default");
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
