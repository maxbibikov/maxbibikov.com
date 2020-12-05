import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { string, arrayOf } from "prop-types";

// Styles
const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  background-color: ${({ theme }) => theme.primary_light};
  margin: 1em 0;
/* 
  @media only screen and (min-width: 900px) {
    max-width: 48%;
  } */
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const Title = styled((props) => <Link {...props} />)`
  margin: 0;
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;
  margin-bottom: 0.5em;
`;

const TagsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0em 1em;
`;

const Tag = styled.li`
  padding: 0.2em 0.5em 0.25em;
  font-size: 0.9rem;
  margin: 0 0.5em 0.5em 0;
  border-radius: 15px;
  border: 1px solid hsla(0, 0%, 0%, 0.25);
`;

const Text = styled.p`
  display: flex;
  padding: 0;
  margin: 0;
`;

const Actions = styled.section`
  display: flex;
  padding: 0.5em 0;
`;

const ActionLink = styled.a`
  padding: 0.5em 0.5em;
  margin: 0 0.5em;
  border: 1px solid transparent;
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: border 0.3s ease;

  &:hover {
    opacity: 1;
    border: 1px solid ${({ theme }) => theme.accent};
  }
`;

export const BlogCard = ({ slug, title, description, thumbnail, tags }) => {
  let renderTags;

  if (tags && tags.length) {
    renderTags = tags.map((tag) => <Tag key={tag}>{tag}</Tag>);
  }

  return (
    <Container>
      <Header>
        <Title to={`/blog${slug}`}>{title}</Title>
        <Text>{description}</Text>
      </Header>
      <TagsContainer>{renderTags}</TagsContainer>
      <Actions>
        <ActionLink href={`/blog${slug}`}>Read</ActionLink>
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
