import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, navigate } from "gatsby";

// Components
import { BlogCard } from "./BlogCard";
import { Button } from "./Button";

// Query
const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            thumbnail
            title
            description
            tags
          }
        }
      }
    }
  }
`;

// Styles
const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;

const BlogCardList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;

  @media only screen and (min-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 900px) {
    flex-direction: row;
    width: 60%;
  }
`;

export function BlogPreview() {
  const data = useStaticQuery(pageQuery);
  const { allMarkdownRemark } = data;
  const blogPosts = allMarkdownRemark.edges;
  const navigateToBlog = () => navigate("/blog");

  return (
    <Container>
      <h2>BLOG</h2>
      <BlogCardList>
        {blogPosts.map(({ node }) => {
          return (
            <BlogCard
              key={node.fields.slug}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              thumbnail={node.frontmatter.thumbnail}
              tags={node.frontmatter.tags}
            />
          );
        })}
      </BlogCardList>

      <Button onClick={navigateToBlog}>More Posts</Button>
    </Container>
  );
}
