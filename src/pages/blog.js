import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import { BlogCard } from "../components/BlogCard";
import SEO from "../components/SEO";

// Styles
const PostList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (width >= 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    column-gap: 1em;
    align-items: stretch;
  }

  @media only screen and (width >= 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min-content;
    column-gap: 1em;
    align-items: stretch;
  }
`;

export default function Blog({ data }) {
  const { allMarkdownRemark } = data;
  const blogPosts = allMarkdownRemark.edges;
  return (
    <Layout>
      <h1>BLOG POSTS</h1>
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

// Gatsby Head API instead of react-helmet
export const Head = () => <SEO title="Blog" />;

// Query
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
