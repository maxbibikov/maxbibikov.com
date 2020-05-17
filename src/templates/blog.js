import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1em;
`;

const HTMLContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <HTMLContainer dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
