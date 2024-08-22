import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

// Components
import Header from "../Header";
import { Footer } from "../Footer";
import "./layout.css";
import "./colors.css";

const GlobalStyle = createGlobalStyle`
  html, body {
    color: var(--color-base);
    background: var(--color-primary);
  }

  a {
    color: var(--color-accent);
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
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
