import React from "react";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { ContactForm } from "../components/ContactForm";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <ContactForm />
  </Layout>
);

export default ContactPage;
