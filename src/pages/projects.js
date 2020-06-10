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

  @media only screen and (min-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 900px) {
    width: 70%;
  }
`;

const ProjectsContainer = styled.div`
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

export default function Projects({ data }) {
  const { allMarkdownRemark } = data;
  const projects = allMarkdownRemark.edges;
  return (
    <Layout>
      <Container>
        <h2>ALL PROJECTS</h2>
        <ProjectsContainer>
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
        </ProjectsContainer>
      </Container>
    </Layout>
  );
}

// Query
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
