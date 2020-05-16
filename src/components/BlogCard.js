import React from "react";
import styled from "styled-components";
import { string, arrayOf } from "prop-types";

// Styles
const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.bg_dark};
  background-color: ${({ theme }) => theme.bg_light};
  margin: 1em 0;

  @media only screen and (min-width: 600px) {
    width: 45%;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.5em;
`;

const TagsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0em 1em 0.5em 1em;
  @media only screen and (min-width: 600px) {
    justify-content: flex-start;
  }
`;

const Tag = styled.li`
  padding: 0.25em 0.5em;
  margin: 0;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.bg_dark};
  @media only screen and (min-width: 600px) {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const Text = styled.p`
  display: flex;
  padding: 0;
  margin: 0;
`;

const Actions = styled.section`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.bg_dark};
  padding: 0.5em 0;
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
export const BlogCard = ({ slug, title, description, thumbnail, tags }) => {
  let renderTags;

  if (tags && tags.length) {
    renderTags = tags.map(tag => <Tag key={tag}>#{tag}</Tag>);
  }

  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <Text>{description}</Text>
      </Header>
      <TagsContainer>{renderTags}</TagsContainer>
      <Actions>
        <ActionLink href={`/blog${slug}`}>Read...</ActionLink>
      </Actions>
    </Container>
  );
};

BlogCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  tags: arrayOf(string),
  thumbnail: string,
};

BlogCard.defaultProps = {
  demoLink: "",
  sourceLink: "",
  tags: [],
  thumbnail: "",
};
