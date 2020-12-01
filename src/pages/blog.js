import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import { BlogCard } from "../components/BlogCard";

// Styles
const PostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  @media only screen and (min-width: 600px) {
    width: 70%;
  }

  @media only screen and (min-width: 900px) {
    width: 50%;
  }
`;

export default function Blog({ data }) {
  const { allMarkdownRemark } = data;
  const blogPosts = allMarkdownRemark.edges;
  return (
    <Layout>
      <h2>BLOG POSTS</h2>
      <PostList>
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
      </PostList>
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
