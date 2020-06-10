import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.bg_color};
  color: ${({ theme }) => theme.text_color};
`;

const Year = styled.div``;

export function Footer() {
  return (
    <FooterContainer>
      <Year>© {new Date().getFullYear()} Max Bibikov</Year>
      <a
        href="https://github.com/maxbibikov/maxbibikov.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </a>
    </FooterContainer>
  );
}
