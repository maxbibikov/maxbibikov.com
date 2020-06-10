import React from "react";
import styled from "styled-components";

// Components
import { Button } from "./Button";

const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  width: 80%;

  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (min-width: 900px) {
    width: 30%;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

const Row = styled.div`
  margin-top: 1em;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  padding: 0.5em;
  width: 100%;
  font-weight: normal;
  &:focus {
    border-color: ${({ theme }) => theme.bg_accent};
  }
`;

const Label = styled.label`
  display: block;
  &:focus-within {
    font-weight: bold;
    color: ${({ theme }) => theme.text_accent};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  resize: vertical;
  padding: 0.5em;
  font-weight: normal;

  &:focus {
    border-color: ${({ theme }) => theme.text_accent};;
  }
`;

const Controlls = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 2em;
`;

export const ContactForm = () => {
  return (
    <ContactFormContainer
      method="POST"
      name="contact"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Title>Contact Me</Title>
      <Row>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            maxLength={60}
            required
          />
        </Label>
      </Row>
      <Row>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            maxLength={80}
            required
          />
        </Label>
      </Row>
      <Row>
        <Label>
          Subject
          <Input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter message subject"
            maxLength={80}
            required
          />
        </Label>
      </Row>
      <Row>
        <Label>
          Message
          <Textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Start typing your message"
            maxLength={1000}
            required
          />
        </Label>
      </Row>

      {/* For hidden fields for netlify forms */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <Controlls>
        <Button type="submit">Send</Button>
        <Button type="reset" styleType="secondary">
          Clear
        </Button>
      </Controlls>
    </ContactFormContainer>
  );
};
