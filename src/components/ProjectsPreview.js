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

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`;

export function ProjectsPreview() {
  const data = useStaticQuery(pageQuery);
  const { allMarkdownRemark } = data;
  const projects = allMarkdownRemark.edges;

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
            />
          );
        })}
      </ProjectsContainer>

      <Button onClick={() => navigate("/projects")}>All Projects</Button>
    </Container>
  );
}
