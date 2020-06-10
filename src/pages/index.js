import React from "react";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Bio } from "../components/Bio";
import { Social } from "../components/Social";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { BlogPreview } from "../components/BlogPreview";

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Max Bibikov - Full Stack JS Developer" />
    <Container>
      <Bio />
      <Social />
      <ProjectsPreview />
      <BlogPreview />
    </Container>
  </Layout>
);

export default IndexPage;
