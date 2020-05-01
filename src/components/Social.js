import React from "react";
import styled from "styled-components";

// Assets
import LinkedInIcon from "../../assets/images/linkedin-brands.svg";
import GithubIcon from "../../assets/images/github-alt-brands.svg";
import EnvelopeIcon from "../../assets/images/envelope-square-solid.svg";

const SocialContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_color};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.text_accent};
  }
`;

const IconContainer = styled.div`
  width: 1.5em;
  margin-right: 0.5em;
`;

const ColumnSpace = styled.div`
  width: 3em;
`;

export const Social = () => {
  return (
    <SocialContainer>
      <h3>SOCIAL</h3>

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
        <ColumnSpace />
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
        <ColumnSpace />
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
