import React from "react";
import styled from "styled-components";

// Assets
import GithubIcon from "../../assets/icons/github-alt-brands.svg";

const FooterContainer = styled.footer`
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SourceLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5em;

  & svg {
    width: 1em;
    margin-right: 0.25em;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <SourceLink
        href="https://github.com/maxbibikov/maxbibikov.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        SourceCode
      </SourceLink>
    </FooterContainer>
  );
}
