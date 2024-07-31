import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import { ProjectCard } from "../components/ProjectCard";
import SEO from "../components/SEO";

// Styles
const Container = styled.div`
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

export default function Projects({ data }) {
  const { allMarkdownRemark } = data;
  const projects = allMarkdownRemark.edges;

  return (
    <Layout>
      <h1>PROJECTS</h1>
      <Container>
        {projects.map(({ node }) => {
          return (
            <ProjectCard
              key={node.frontmatter.title}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              demoLink={node.frontmatter.demo_link}
              sourceLink={node.frontmatter.source_link}
              tags={node.frontmatter.tags}
            />
          );
        })}
      </Container>
    </Layout>
  );
}

// Gatsby Head API instead of react-helmet
export const Head = () => <SEO title="Projects" />;

// Query
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
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
