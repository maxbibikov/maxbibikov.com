import React from "react";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Bio } from "../components/Bio";
import { Social } from "../components/Social";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { BlogPreview } from "../components/BlogPreview";

const IndexPage = () => (
  <Layout>
    <SEO title="Maksym Bibikov - Full Stack JS Developer" />
    <Bio />
    <Social />
    <ProjectsPreview />
    <BlogPreview />
  </Layout>
);

export default IndexPage;
