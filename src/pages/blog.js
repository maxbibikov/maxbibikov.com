import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import { BlogCard } from "../components/BlogCard";

// Styles
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 2em;

  @media only screen and (min-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 900px) {
    width: 70%;
  }
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default function Blog({ data }) {
  const { allMarkdownRemark } = data;
  const blogPosts = allMarkdownRemark.edges;
  return (
    <Layout>
      <Container>
        <h2>BLOG POSTS</h2>
        <BlogContainer>
          {blogPosts.map(({ node }) => {
            return (
              <BlogCard
                key={node.fields.slug}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                tags={node.frontmatter.tags}
              />
            );
          })}
        </BlogContainer>
      </Container>
    </Layout>
  );
}

// Query
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
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
            title
            description
            demo_link
            source_link
            tags
          }
        }
      }
    }
  }
`;
