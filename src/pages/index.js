import React from "react";
import { navigate } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Bio } from "../components/Bio";
import { Button } from "../components/Button";

const IndexPage = () => (
  <Layout>
    <SEO title="Max Bibikov" />
    <Bio />
    <section>
      <Button onClick={() => navigate("/contact")}>contact me</Button>
    </section>
  </Layout>
);

export default IndexPage;
