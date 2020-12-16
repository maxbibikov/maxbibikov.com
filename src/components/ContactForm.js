import { navigate } from "gatsby";
import React from "react";
import styled from "styled-components";

// Components
import { Button } from "./Button";

const Container = styled.form`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: stretch;
  padding: 2em 0;

  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (min-width: 900px) {
    width: 30%;
  }
`;

const Title = styled.h1`
  align-self: center;
  margin: 0;
`;

const Row = styled.div`
  margin-top: 1em;
`;

const Label = styled.label`
  display: block;
  cursor: pointer;

  &:focus-within {
    color: ${({ theme }) => theme.accent};
  }
`;

const Hint = styled.p`
  margin-bottom: 0;
  font-size: 0.8em;
  color: ${({ theme }) => theme.secondary_light};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.2);
  margin-top: 0.2em;
  padding: 0.5em;
  font-weight: normal;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.2);
  resize: vertical;
  margin-top: 0.2em;
  padding: 0.5em;
  font-weight: normal;
`;

const Controlls = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2em;
`;

export const ContactForm = () => {
  return (
    <Container
      method="POST"
      name="contact"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Title>Contact</Title>
      <Row>
        <Label>
          Name
          <Hint id="name-hint">Enter your name</Hint>
          <Input
            type="text"
            name="name"
            id="name"
            aria-labelledby="name-hint"
            maxLength={60}
            required
          />
        </Label>
      </Row>
      <Row>
        <Label>
          Email
          <Hint id="email-hint">
            Enter your email address e.g. example@provider.com
          </Hint>
          <Input
            type="email"
            name="email"
            id="email"
            aria-labelledby="email-hint"
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
        <Button onClick={() => navigate("/")} styleType="secondary">
          Cancel
        </Button>
      </Controlls>
    </Container>
  );
};
