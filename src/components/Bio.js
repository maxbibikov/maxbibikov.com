import React from "react";
import styled from "styled-components";

// Components
import Image from "./Image";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0 0;

  @media only screen and (min-width: 425px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 75px;
  border: 2px solid #fff;
  margin-bottom: 1em;

  @media only screen and (min-width: 425px) {
    margin-bottom: 0;
    margin-right: 1em;
  }
`;

const About = styled.div`
  text-align: center;

  @media only screen and (min-width: 425px) {
    text-align: left;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  margin: 0;
`;

const AboutText = styled.p`
  margin: 0;
`;

const TechText = styled.p`
  opacity: 0.8;
  margin: 0;
`;

export function Bio() {
  return (
    <Container>
      <Avatar>
        <Image />
      </Avatar>
      <About>
        <TitleContainer>
          <Name>Max Bibikov</Name>
          <AboutText>Full Stack Software Developer</AboutText>
          <TechText>React, React-Native, NodeJS</TechText>
        </TitleContainer>
      </About>
    </Container>
  );
}
