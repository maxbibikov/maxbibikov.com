import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import { ProjectCard } from "../components/ProjectCard";

// Styles
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 2em;
`;

export default function Projects({ data }) {
  const { allMarkdownRemark } = data;
  const projects = allMarkdownRemark.edges;
  return (
    <Layout>
      <Container>
        <h2>ALL PROJECTS</h2>
        {projects.map(({ node }) => {
          return (
            <ProjectCard
              key={node.frontmatter.title}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              linkDemo={node.frontmatter.linkDemo}
              linkSource={node.frontmatter.linkSource}
            />
          );
        })}
      </Container>
    </Layout>
  );
}

// Query
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            linkDemo
            linkSource
          }
        }
      }
    }
  }
`;
