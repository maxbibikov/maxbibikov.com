import React from "react";
import styled from "styled-components";

// Assets
import LinkedInIcon from "../../assets/icons/linkedin-brands.svg";
import GithubIcon from "../../assets/icons/github-alt-brands.svg";
import EnvelopeIcon from "../../assets/icons/envelope-square-solid.svg";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0 2em;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  padding: 0.5em 1em;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: 0.25em;

  & svg {
    width: 1em;
  }
`;

export const Social = () => {
  return (
    <Container>
      <LinkContainer>
        <SocialLink
          href="https://www.linkedin.com/in/max-bibikov/"
          target="blank"
          rel="noopener noreferrer"
        >
          <IconContainer>
            <LinkedInIcon />
          </IconContainer>
          <span>LinkedIn</span>
        </SocialLink>
        <SocialLink
          href="https://github.com/maxbibikov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer>
            <GithubIcon />
          </IconContainer>
          <span>GitHub</span>
        </SocialLink>
        <SocialLink href="mailto:contact@maxbibikov.com">
          <IconContainer>
            <EnvelopeIcon />
          </IconContainer>
          <span>Email</span>
        </SocialLink>
      </LinkContainer>
    </Container>
  );
};
