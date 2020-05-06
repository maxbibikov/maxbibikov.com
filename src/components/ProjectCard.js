import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

// Styles
const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.bg_contrast};
  margin: 1em 0;

  @media only screen and (min-width: 600px) {
    width: 45%
  }
  @media only screen and (min-width: 900px) {
    width: 45%
  }
`;

const Header = styled.header`
  display: flex;
  padding: 1em;
`;

const Text = styled.p`
  display: flex;
  padding: 0 1em;
`;

const Actions = styled.section`
  display: flex;
  padding: 0 0 1em 0;
`;

const ActionLink = styled.a`
  padding: 0.5em 0.5em;
  margin: 0 0.5em;
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.bg_contrast};
  }
`;

export const ProjectCard = ({
  title,
  subtitle,
  description,
  demoLink,
  sourceLink,
}) => {
  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </Header>
      <Text>{description}</Text>
      <Actions>
        {demoLink && (
          <ActionLink href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </ActionLink>
        )}
        <ActionLink href={sourceLink} target="_blank" rel="noopener noreferrer">
          Source Code
        </ActionLink>
      </Actions>
    </Container>
  );
};

ProjectCard.propTypes = {
  title: string.isRequired,
  subtitle: string,
  description: string.isRequired,
  demoLink: string,
  sourceLink: string.isRequired,
};

ProjectCard.defaultProps = {
  subtitle: "",
  demoLink: "",
  sourceLink: "",
};
