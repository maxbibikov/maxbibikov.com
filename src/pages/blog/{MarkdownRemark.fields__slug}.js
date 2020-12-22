import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 1em;

  @media only screen and (min-width: 900px) {
    width: 50%;
  }
`;

const HTMLContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function BlogPost({ data }) {
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
