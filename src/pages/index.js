import React from "react";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Bio } from "../components/Bio";
import { Social } from "../components/Social";
import { ProjectsPreview } from "../components/ProjectsPreview";

const IndexPage = () => (
  <Layout>
    <SEO title="Max Bibikov" />
    <Bio />
    <Social />
    <ProjectsPreview />
  </Layout>
);

export default IndexPage;
