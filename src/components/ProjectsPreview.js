import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, navigate } from "gatsby";

// Components
import { ProjectCard } from "./ProjectCard";
import { Button } from "./Button";

// Query
const pageQuery = graphql`
  {
    allMarkdownRemark(
      limit: 2
      sort: { frontmatter: { date: DESC } }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em 0;
`;

const ProjectCardList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;

  @media only screen and (width >= 600px) {
    width: 70%;
  }

  @media only screen and (width >= 900px) {
    width: 45%;
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
      <ProjectCardList>
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
      </ProjectCardList>

      <Button onClick={navigateToProjects}>More Projects</Button>
    </Container>
  );
}
