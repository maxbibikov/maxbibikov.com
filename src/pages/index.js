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
    <SEO title="Max Bibikov - full stack software developer" />
    <Bio />
    <Social />
    <ContactBtn />
    <ProjectsPreview />
    <BlogPreview />
  </Layout>
);

export default IndexPage;
