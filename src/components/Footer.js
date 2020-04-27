import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.bg_contrast};
  color: ${({ theme }) => theme.text_contrast};
`;

const Year = styled.div``;

export function Footer() {
  return (
    <FooterContainer>
      <span>
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
      <Year>© {new Date().getFullYear()} Maksym Bibikov</Year>
    </FooterContainer>
  );
}
