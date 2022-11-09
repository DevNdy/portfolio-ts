import React, { useRef } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const ContactForm = () => {
  const form = useRef();
  return (
    <ContactFormStyled>
      <input type="text" placeholder="Quel est votre nom?" name="user_name" required />
      <input type="email" placeholder="Quel est votre email?" name="user_email" required />
      <textarea rows={10} cols={10} placeholder="Quel est votre message?" name="message" required />
      <button>envoyer le message</button>
    </ContactFormStyled>
  );
};

const ContactFormStyled = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    height: 25px;
    width: 350px;
    margin-bottom: 5px;
    padding: 5px;
    font-size: 15px;
    color: ${theme.colors.gray};
    border-radius: 5px;
    border: 0.5px solid ${theme.colors.primaryColor};
    &:focus {
      outline-color: ${theme.colors.primaryColor};
    }
    &::placeholder {
      color: ${theme.colors.gray};
    }
  }
  textarea {
    width: 350px;
    border-radius: 5px;
    font-size: 15px;
    color: ${theme.colors.gray};
    border: 0.5px solid ${theme.colors.primaryColor};
    padding: 5px;
    &:focus {
      outline-color: ${theme.colors.primaryColor};
    }
    &::placeholder {
      color: ${theme.colors.gray};
    }
  }
  button {
    height: 30px;
    width: 362px;
    margin-top: 5px;
    border: 2px solid ${theme.colors.primaryColor};
    color: ${theme.colors.primaryColor};
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
      background-color: ${theme.colors.primaryColor};
      color: white;
    }
  }
`;

export default ContactForm;
