import React from "react";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Bio } from "../components/Bio";
import { Social } from "../components/Social";

const IndexPage = () => (
  <Layout>
    <SEO title="Max Bibikov" />
    <Bio />
    <Social />
  </Layout>
);

export default IndexPage;
