import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Success = () => (
  <Layout>
    <Container>
      <h1>
        <span role="img" aria-label="incoming envelope">
          📨
        </span>
      </h1>
      <h3>Message Sent</h3>
      <Link>Home</Link>
    </Container>
  </Layout>
);

export default Success;
