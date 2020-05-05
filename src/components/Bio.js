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
  margin: 2em 0;
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

const About = styled.div`
  text-align: center;
`;

const AboutText = styled.p`
  margin: 0;
  font-size: 1.1rem;
`;

const TechText = styled.p`
  font-size: 1.1rem;
  color: ${(({theme}) => theme.text_accent)}
`

export function Bio() {
  return (
    <BioContainer>
      <Avatar>
        <Image />
      </Avatar>
      <About>
        <TitleContainer>
          <h3 style={{ margin: 0 }}>Maksym Bibikov</h3>
          <AboutText>Full Stack JavaScript Developer</AboutText>
          <TechText>React | React-Native | NodeJS</TechText>
        </TitleContainer>
      </About>
      <Button onClick={() => navigate("/contact")}>contact me</Button>
    </BioContainer>
  );
}
