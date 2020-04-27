import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Bio } from "../components/Bio";

const IndexPage = () => (
  <Layout>
    <SEO title="Max Bibikov" />
    <Bio />
  </Layout>
);

export default IndexPage;
