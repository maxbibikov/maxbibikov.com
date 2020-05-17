import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, navigate } from "gatsby";

// Components
import { ProjectCard } from "./ProjectCard";
import { Button } from "./Button";

// Query
const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
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
            demo_link
            source_link
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

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 900px) {
    width: 60%;
  }
`;

export function ProjectsPreview() {
  const data = useStaticQuery(pageQuery);
  const { allMarkdownRemark } = data;
  const projects = allMarkdownRemark.edges;
  const navigateToProjects = () => navigate("/projects");

  return (
    <Container>
      <h2>PROJECTS</h2>
      <ProjectsContainer>
        {projects.map(({ node }) => {
          return (
            <ProjectCard
              key={node.fields.slug}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              demoLink={node.frontmatter.demo_link}
              sourceLink={node.frontmatter.source_link}
              tags={node.frontmatter.tags}
            />
          );
        })}
      </ProjectsContainer>

      <Button onClick={navigateToProjects}>All Projects</Button>
    </Container>
  );
}
