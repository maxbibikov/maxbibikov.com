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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 2em;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
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
      <BlogContainer>
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
      </BlogContainer>

      <Button onClick={navigateToBlog}>All Posts</Button>
    </Container>
  );
}
