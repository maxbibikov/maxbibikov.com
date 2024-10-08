import React from "react";
import styled from "styled-components";
import { string, arrayOf } from "prop-types";

// Styles
const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 6px;
  box-shadow: 0 2px 6px 0 oklch(0% 0 0deg / 20%);
  background-color: var(--color-primary-lt);
  margin: 1em 0;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 0.5em;
`;

const TagsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 1em;
`;

const Tag = styled.li`
  padding: 0.2em 0.5em 0.25em;
  font-size: 0.9rem;
  margin: 0 0.5em 0.5em 0;
  border-radius: 15px;
  border: 1px solid oklch(0% 0 0deg / 25%);
  white-space: nowrap;
`;

const Text = styled.p`
  display: flex;
  padding: 0;
  margin: 0;
`;

const Actions = styled.section`
  display: flex;
  padding: 0.5em 0;
  margin-top: auto;
`;

const ActionLink = styled.a`
  padding: 0.5em;
  margin-left: 0.5em;
  border: 1px solid transparent;
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: border 0.3s ease;
  white-space: nowrap;

  &:hover {
    opacity: 1;
    border-color: var(--color-accent);
  }
`;

export const ProjectCard = ({
  title,
  description,
  demoLink,
  sourceLink,
  tags,
}) => {
  let renderTags;

  if (tags && tags.length) {
    renderTags = tags.map((tag) => <Tag key={tag}>{tag}</Tag>);
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Header>
      <TagsContainer>{renderTags}</TagsContainer>
      <Actions>
        {demoLink && (
          <ActionLink href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </ActionLink>
        )}
        <ActionLink href={sourceLink} target="_blank" rel="noopener noreferrer">
          Code
        </ActionLink>
      </Actions>
    </Container>
  );
};

ProjectCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  demoLink: string,
  sourceLink: string.isRequired,
  tags: arrayOf(string),
};

ProjectCard.defaultProps = {
  demoLink: "",
  sourceLink: "",
  tags: [],
};
