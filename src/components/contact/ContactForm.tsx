import React, { useRef } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const form = useRef<any>(null);
  const { ref, inView } = useInView();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm("service_8zow4ce", "template_b5y1a24", form.current, "jFtQIu6lpPKsGjR1Y").then(
      (result) => {
        console.log(result.text);
        alert("Votre message a bien été envoyé! Merci d'avoir visité mon portfolio, à bientôt.");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <ContactFormStyled>
      <form ref={form && ref} onSubmit={sendEmail} className={`${inView ? "isVisible" : ""}`}>
        <input type="text" placeholder="Quel est votre nom?" name="user_name" required />
        <input type="email" placeholder="Quel est votre email?" name="user_email" required />
        <textarea
          rows={10}
          cols={10}
          placeholder="Quel est votre message?"
          name="message"
          required
        />
        <button>envoyer le message</button>

        <h3>
          <span>ou</span>
          developpeur.ndy@gmail.com
        </h3>
      </form>
    </ContactFormStyled>
  );
};

const ContactFormStyled = styled.div`
  margin-top: 40px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);

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
      transition: 0.4s;
      &:hover {
        background-color: ${theme.colors.primaryColor};
        color: white;
      }
    }

    h3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 300;
      font-style: italic;
      color: ${theme.colors.gray};

      span {
        font-size: 15px;
        margin-bottom: 10px;
        font-weight: 100;
      }
    }
  }

  .isVisible {
    transition: 1.4s;
    opacity: 1;
    transform: scale(1);
  }
`;

export default ContactForm;
