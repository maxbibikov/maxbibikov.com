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

// Styles
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 2em;
`;

export function ProjectsPreview() {
  const data = useStaticQuery(pageQuery);
  const { allMarkdownRemark } = data;
  const projects = allMarkdownRemark.edges;

  return (
    <Container>
      <h2>PROJECTS</h2>
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

      <Button onClick={() => navigate("/projects")}>All Projects</Button>
    </Container>
  );
}
