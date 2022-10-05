import React from "react";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Bio } from "../components/Bio";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { BlogPreview } from "../components/BlogPreview";
import { Social } from "../components/Social";
import { ContactBtn } from "../components/ContactBtn";

const IndexPage = () => (
  <Layout>
    <Bio />
    <Social />
    <ContactBtn />
    <ProjectsPreview />
    <BlogPreview />
  </Layout>
);

export default IndexPage;

// Gatsby Head API instead of react-helmet
export const Head = () => (
  <SEO title="Max Bibikov - full stack software developer" />
);
