import React from "react";
import styled from "styled-components";

// Assets
import LinkedInIcon from "../../assets/icons/linkedin-brands.svg";
import GithubIcon from "../../assets/icons/github-alt-brands.svg";
import EnvelopeIcon from "../../assets/icons/envelope-square-solid.svg";

const SocialContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 2em;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_color};
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.text_accent};
  }
  margin: 0 1em 1em;
`;

const IconContainer = styled.div`
  width: 1.5em;
  margin-right: 0.5em;
`;

export const Social = () => {
  return (
    <SocialContainer>
      <h2>SOCIAL</h2>

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
    </SocialContainer>
  );
};
