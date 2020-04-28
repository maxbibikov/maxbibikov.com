import React from "react";
import Image from "./Image";
import styled from "styled-components";

const BioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 75px;
  border: 5px solid #fff;
  & img {
    margin: 0;
  }
`;

const About = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const AboutText = styled.p`
  margin: 0;
`;

export function Bio() {
  return (
    <BioContainer>
      <Avatar>
        <Image />
      </Avatar>
      <About>
        <AboutText>Hi, I’m Max. Full Stack JS Developer.</AboutText>
        <AboutText>React, React Native, NodeJS...</AboutText>
      </About>
    </BioContainer>
  );
}
