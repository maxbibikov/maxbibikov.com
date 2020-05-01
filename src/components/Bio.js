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
  margin: 0 0 0.5em 0;
`;

export function Bio() {
  return (
    <BioContainer>
      <Avatar>
        <Image />
      </Avatar>
      <About>
        <h3>Maksym Bibikov</h3>
        <AboutText>Hi, I'm Max, Full Stack Developer.</AboutText>
        <AboutText>
          I build projects with React, React-Native, NodeJS.
        </AboutText>
      </About>
      <Button onClick={() => navigate("/contact")}>contact me</Button>
    </BioContainer>
  );
}
