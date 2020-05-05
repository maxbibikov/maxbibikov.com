import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

// Styles
const Container = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.bg_contrast};
  margin: 1em 0;
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
  linkDemo,
  linkSource,
}) => {
  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </Header>
      <Text>{description}</Text>
      <Actions>
        <ActionLink href={linkDemo} target="_blank" rel="noopener noreferrer">
          Demo
        </ActionLink>
        <ActionLink href={linkSource} target="_blank" rel="noopener noreferrer">
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
  linkDemo: string.isRequired,
  linkSource: string.isRequired,
};

ProjectCard.defaultProps = {
  subtitle: "",
};
