import React from "react";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { ContactForm } from "../components/ContactForm";

const ContactPage = () => (
  <Layout>
    <ContactForm />
  </Layout>
);

export default ContactPage;

// Gatsby Head API instead of react-helmet
export const Head = () => <SEO title="Contact" />;
