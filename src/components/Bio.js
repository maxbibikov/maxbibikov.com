import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

// Components
import Image from "./Image";
import { Button } from "./Button";

const BioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0;
  padding: 0 0.5em;
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
  margin-bottom: 0.5em;
  & img {
    margin: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
`;

const About = styled.div`
  text-align: center;
`;

const AboutText = styled.p`
  margin: 0;
  font-size: 1.1rem;
`;

const TechText = styled.p`
  font-size: 1.1rem;
`;

export function Bio() {
  const navigateToContact = () => navigate("/contact");
  return (
    <BioContainer>
      <Avatar>
        <Image />
      </Avatar>
      <About>
        <TitleContainer>
          <Title>Max Bibikov</Title>
          <AboutText>Full Stack Software Engineer</AboutText>
          <TechText>React | React-Native | NodeJS</TechText>
        </TitleContainer>
      </About>
      <Button onClick={navigateToContact}>contact me</Button>
    </BioContainer>
  );
}
